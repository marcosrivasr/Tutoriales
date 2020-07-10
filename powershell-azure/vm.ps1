## VM Account
# Credentials for Local Admin account you created in the sysprepped (generalized) vhd image
$VMLocalAdminUser = "LocalAdminUser"
$VMLocalAdminSecurePassword = ConvertTo-SecureString "Password" -AsPlainText -Force
## Azure Account
$LocationName = "southcentralus"
$ResourceGroupName = "rg-pruebas"
# This a Premium_LRS storage account.
# It is required in order to run a client VM with efficiency and high performance.
$StorageAccount = "sa-pruebas"

## VM
$OSDiskName = "osdisk-vm04"
$ComputerName = "VM04"
$OSDiskUri = "https://Mydisk.blob.core.windows.net/disks/MyOSDisk.vhd"
$SourceImageUri = "https://Mydisk.blob.core.windows.net/vhds/MyOSImage.vhd"
$VMName = "MyVM"
# Modern hardware environment with fast disk, high IOPs performance.
# Required to run a client VM with efficiency and performance
$VMSize = "Standard_DS3"
$OSDiskCaching = "ReadWrite"
$OSCreateOption = "FromImage"

## Networking
$DNSNameLabel = "mydnsname" # mydnsname.westus.cloudapp.azure.com
$NetworkName = "MyNet"
$NICName = "MyNIC"
$PublicIPAddressName = "MyPIP"
$SubnetName = "MySubnet"
$SubnetAddressPrefix = "10.0.0.0/24"
$VnetAddressPrefix = "10.0.0.0/16"

$SingleSubnet = New-AzVirtualNetworkSubnetConfig `
                -Name $SubnetName `
                -AddressPrefix $SubnetAddressPrefix

$Vnet = New-AzVirtualNetwork `
                -Name $NetworkName `
                -ResourceGroupName $ResourceGroupName `
                -Location $LocationName `
                -AddressPrefix $VnetAddressPrefix `
                -Subnet $SingleSubnet

$PIP = New-AzPublicIpAddress `
                -Name $PublicIPAddressName `
                -DomainNameLabel $DNSNameLabel `
                -ResourceGroupName $ResourceGroupName `
                -Location $LocationName `
                -AllocationMethod Dynamic

$NIC = New-AzNetworkInterface `
                -Name $NICName `
                -ResourceGroupName $ResourceGroupName `
                -Location $LocationName `
                -SubnetId $Vnet.Subnets[0].Id `
                -PublicIpAddressId $PIP.Id

$Credential = New-Object System.Management.Automation.PSCredential ($VMLocalAdminUser, $VMLocalAdminSecurePassword);

$VirtualMachine = New-AzVMConfig `
                -VMName $VMName `
                -VMSize $VMSize

$VirtualMachine = Set-AzVMOperatingSystem `
                -VM $VirtualMachine `
                -Windows `
                -ComputerName $ComputerName `
                -Credential $Credential `
                -ProvisionVMAgent `
                -EnableAutoUpdate

$VirtualMachine = Add-AzVMNetworkInterface `
                -VM $VirtualMachine `
                -Id $NIC.Id

$VirtualMachine = Set-AzVMOSDisk `
                -VM $VirtualMachine `
                -Name $OSDiskName `
                -VhdUri $OSDiskUri `
                -SourceImageUri $SourceImageUri `
                -Caching $OSDiskCaching `
                -CreateOption $OSCreateOption `
                -Windows

New-AzVM -ResourceGroupName $ResourceGroupName -Location $LocationName -VM $VirtualMachine -Verbose
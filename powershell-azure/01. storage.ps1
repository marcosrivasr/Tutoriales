Connect-AzureRmAccount

<#
    Crear una cuenta de storage
#>
Get-AzureRmResourceGroup

$resourcegroupname = "pruebas-rg"
$storagename = "mrrstoragetest"
$location = "southcentralus"

Remove-AzureRmStorageAccount -ResourceGroupName $resourcegroupname -Name $storagename
New-AzureRmStorageAccount -ResourceGroupName $resourcegroupname -Name $storagename -Location $location -SkuName Standard_LRS -Kind StorageV2


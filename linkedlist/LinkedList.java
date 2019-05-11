import java.util.HashSet;

class LinkedList{
    
    private Node head;
    private int total;

    LinkedList(){
        this.head = null;
        this.total = 0;
    }

    public void add(int data){

        Node newNode = new Node(data);
        newNode.next = null;

        if(this.head == null){
            // no hay elementos en la lista enlazada
            head = newNode;
        }else{
            // ya hay elementos
            Node last = getLastNode();
            last.next = newNode;
        }
        this.total++;
    }

    public Node getLastNode(){
        if (this.head == null) return null;

        Node last = this.head;
        Node control = this.head;

        while(control != null){
            last = control;
            control = last.next;
        }

        return last;
    }

    public Node getNodeAt(int pos){
        if(this.head == null || (this.total - 1) < pos) return null;

        Node control = this.head;
        int x = 0;

        while(control != null){
            if(x == pos) break;
            x++;
            control = control.next;
        }

        return control;
    }

    public void append(Node node, int data){
        if(this.head == null || node == null) return;

        Node newNode = new Node(data);

        Node prev = node;
        Node next = node.next;

        prev.next = newNode;
        newNode.next = next;
        this.total++;
    }

    public void delete(Node node){
        if(this.head == null || node == null) return;

        Node control = this.head;
        Node temp = null;

        if(node == head){
            // se quita el nodo inicial
            temp = this.head;
            this.head = this.head.next;

            temp = null;
        }else{
            // se quita otro nodo
            while(control.next != node){
                control = control.next;
            }

            temp = control.next;
            control.next = temp.next;
            temp = null;
        }
        this.total--;
    }

    public void print(){
        Node node = this.head;

        while(node != null){
            System.out.println(node.data);
            node = node.next;
        }
    }

    public void removeDuplicated(){
        // 1->2->3->4->5->6
        HashSet<Integer> set = new HashSet<Integer>();
        Node node = this.head;
        Node prev = this.head;

        while(node != null){
            if(set.contains(node.data)){
                prev.next = node.next;
            }else{
                set.add(node.data);
                prev = node;
            }
            node = node.next;
        }
    }

    public void removeDuplicatedWithoutBuffer(){
        // 1->2->3->3->4->5->4->null
        Node node = this.head;
        
        while(node != null){
            Node iterator = node;
            while(iterator.next != null){
                if(iterator.next.data == node.data){
                    iterator.next = iterator.next.next;
                }else{
                    iterator = iterator.next;
                }
            }
            node = node.next;
        }
    }

    public class Node{
        int data;
        Node next;

        Node(int data){
            this.data = data;
            this.next = null;
        }
    }

}

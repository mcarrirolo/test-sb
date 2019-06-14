
package controller;

import java.util.Vector;

public class Node {

    String name;
    Vector<Node> child;

    Node(String name_){
        name = name_;
    }
    Node(String name_, Vector<Node> child_){
        name = name_;
        child = child_;
    }
    public void addChild(Node child_){
        child.add(child_);
        System.out.println(child);
    }
    public void removeChild(Node child_){
        child.remove(child_);
        System.out.println(child);
    }

}
package controller;

public interface ITestAgent {

    void sendNewAgentRequest(String name, String clas, String args, String owner, String container);
    String platformNameRequest();
}
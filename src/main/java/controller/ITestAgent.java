package controller;

public interface ITestAgent {

    void sendNewAgentRequest(String name, String clas, String args, String owner, String container);
    String platformNameRequest();
    String containerNameRequest();
    String[] agentsNameRequest();
    void killRequest(String name);
    void suspendRequest(String name);
    void resumeRequest(String name);
    void cloneRequest(String name, String container, String newname);
    void migrateRequest(String name, String container);
    void freezeRequest(String name);
    void thawRequest(String name, String container);
    void saveRequest(String name);
    void snifferRequest(String container);
    void dummyRequest(String container);
    void logRequest(String container);
    void introspectorRequest(String container);

}
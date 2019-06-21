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

    int snifferRequest(String container);
    void doSniffRequest(String name);
    void doNotSniffRequest(String name);
    Object[] getSniffedMsgRequest();

    int dummyRequest(String container);
    void sendDummyRequest(String senderName, String receiverName, String content, String ontology, String language, String protocol);

    int logRequest(String container);
    Object[] startLoggingRequest();

    void introspectorRequest(String container);

    String[] updateRequest();

}
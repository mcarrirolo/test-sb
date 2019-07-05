package controller;

public interface ITestAgent {

    void sendNewAgentRequest(String name, String clas, String args, String owner, String container);

    String platformNameRequest();
    String containerNameRequest();
    String[] agentsNameRequest();
    String[] remoteAgentsNameRequest(String remoteContainer);

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
    void sendDummyRequest(String senderName, String receiverName, int commType, String content, String ontology, String language, String protocol, String conversation, String repTo, String repWith, String encoding);
    Object[] getDummyMsgRequest();

    int logRequest(String container);
    Object[] startLoggingRequest();

    int introspectorRequest(String container);
	void debugOnRequest(String name);
	void debugOffRequest(String name);
	Object[] getBehavioursRequest();
	String getCurrentStateRequest();
	Object[] getSentMsgRequest();
	Object[] getReceivedMsgRequest();
	Object[] getPostedMsgRequest();

    String[] updateRequest();
    
	void addPlatformAMSRequest(String string);
	void refreshAgentsRequest(String platform);
	String getAPDescriptionRequest();


}
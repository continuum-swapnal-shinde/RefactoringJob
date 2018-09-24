$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("platform/WebrootPlugin.feature");
formatter.feature({
  "line": 1,
  "name": "Webroot Plugin Scenarios",
  "description": "",
  "id": "webroot-plugin-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify Agent Microservice is able to push messages in Webroot Plugin Kafka Topic-C3621661",
  "description": "",
  "id": "webroot-plugin-scenarios;verify-agent-microservice-is-able-to-push-messages-in-webroot-plugin-kafka-topic-c3621661",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@PlatformRegression777"
    },
    {
      "line": 3,
      "name": "@Win7_32Bit"
    },
    {
      "line": 3,
      "name": "@Win7_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_32Bit"
    },
    {
      "line": 3,
      "name": "@Win8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_32Bit"
    },
    {
      "line": 3,
      "name": "@Win10_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12R2_64Bit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Starts Webroot Consumer Topic",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User send a Post request for webroot plugin as \"\u003cEndPoint\u003e\" and \"\u003cScriptCommand\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Stops Webroot Consumer Topic and Fetch Data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User Validate the Data fetch from the Webroot kafka topic as \"\u003cExpectedMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "webroot-plugin-scenarios;verify-agent-microservice-is-able-to-push-messages-in-webroot-plugin-kafka-topic-c3621661;",
  "rows": [
    {
      "cells": [
        "RowIndex",
        "EndPoint",
        "ExpectedMessage",
        "ScriptCommand"
      ],
      "line": 14,
      "id": "webroot-plugin-scenarios;verify-agent-microservice-is-able-to-push-messages-in-webroot-plugin-kafka-topic-c3621661;;1"
    },
    {
      "cells": [
        "1",
        "/agent/v1/EndPointID/webroot",
        "deepScan",
        "deepScan"
      ],
      "line": 15,
      "id": "webroot-plugin-scenarios;verify-agent-microservice-is-able-to-push-messages-in-webroot-plugin-kafka-topic-c3621661;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 81123512,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Agent Microservice is able to push messages in Webroot Plugin Kafka Topic-C3621661",
  "description": "",
  "id": "webroot-plugin-scenarios;verify-agent-microservice-is-able-to-push-messages-in-webroot-plugin-kafka-topic-c3621661;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@PlatformRegression777"
    },
    {
      "line": 3,
      "name": "@Win10_64Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8.1_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_64Bit"
    },
    {
      "line": 3,
      "name": "@Win7_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer12R2_64Bit"
    },
    {
      "line": 3,
      "name": "@Win10_32Bit"
    },
    {
      "line": 3,
      "name": "@WinServer16_64Bit"
    },
    {
      "line": 3,
      "name": "@Win8_32Bit"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "SSH connection establishes with remote test machine from tag",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Starts Webroot Consumer Topic",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fetch AgentCore EndPointID from agentCore config file from tag",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User send a Post request for webroot plugin as \"/agent/v1/EndPointID/webroot\" and \"deepScan\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should validate the status code as \"200\"OK",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Stops Webroot Consumer Topic and Fetch Data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User Validate the Data fetch from the Webroot kafka topic as \"deepScan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.sshConnectionEstablishedWithRemoteTestMachineFromTag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eConnection Establish for : 10.2.114.113:22\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 982364581,
  "status": "passed"
});
formatter.match({
  "location": "KafkaStep.user_starts_webroot_result_consumer_topic()"
});
formatter.write("Webroot Kafka Topic consumer started with GROUP : juno-agent-webroot-group-gmdeeyqfya");
formatter.result({
  "duration": 28618325747,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_fetch_AgentCore_EndPointID_from_agentCore_config_file_from_tag()"
});
formatter.write("\u003cfont color\u003d\"blue\"\u003e\u003cb\u003eEndPoint ID is 69c21305-4a58-4433-a968-19120bb58afc\u003c/b\u003e\u003c/font\u003e\u003cbr/\u003e");
formatter.result({
  "duration": 266018327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/agent/v1/EndPointID/webroot",
      "offset": 48
    },
    {
      "val": "deepScan",
      "offset": 83
    }
  ],
  "location": "ScriptingPluginStep.i_send_a_Post_request_for_webroot_plugin_as(String,String)"
});
formatter.write("I send a Post request for URL https://integration.agent.exec.itsupport247.net/agent/v1/69c21305-4a58-4433-a968-19120bb58afc/webroot");
formatter.write("Json format used for post :\"{\\\"timestampUTC\\\": \\\"2018-09-23T23:54:50.580Z\\\",\\\"status\\\":{\\\"installed\\\": \\\"true\\\", \\\"running\\\" : \\\"true\\\",\\\"agentVersion\\\": \\\"1.0.383.0\\\",\\\"agentMachineID\\\": \\\"f4701f7f-51a9-496f-a907-510a1fd8fb73\\\",\\\"activeThreats\\\": \\\"0\\\"},\\\"messageType\\\": \\\"status\\\"}\"");
formatter.result({
  "duration": 11073124955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "CommonSteps.i_should_validate_the_status_code_as_OK(String)"
});
formatter.write("Status OK");
formatter.result({
  "duration": 31901138,
  "status": "passed"
});
formatter.match({
  "location": "KafkaStep.user_stops_webroot_consumer_topic_and_fetch_data()"
});
formatter.write("Webroot Kafka Topic Consumer is stopped now..");
formatter.result({
  "duration": 100167242425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deepScan",
      "offset": 62
    }
  ],
  "location": "KafkaStep.i_validate_the_data_fetch_from_the_webroot_kafka_topic(String)"
});
formatter.write("Webroot Kafka Topic Data for Agent Machine ID : f4701f7f-51a9-496f-a907-510a1fd8fb73 -\u003e{\"timestampUTC\": \"2018-09-23T23:54:50.580Z\",\"status\":{\"installed\": \"true\", \"running\" : \"true\",\"agentVersion\": \"1.0.383.0\",\"agentMachineID\": \"f4701f7f-51a9-496f-a907-510a1fd8fb73\",\"activeThreats\": \"0\"},\"messageType\": \"status\"}");
formatter.result({
  "duration": 4997825,
  "status": "passed"
});
formatter.after({
  "duration": 2172609,
  "status": "passed"
});
});
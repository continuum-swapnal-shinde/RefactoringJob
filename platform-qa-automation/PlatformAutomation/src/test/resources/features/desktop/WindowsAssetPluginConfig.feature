Feature: Windows Asset Plugin Configuration change
 

  @Regression @DesktopRegression @WinServer3R2_64Bit @WinServer3_64Bit @WinServer3_32Bit @DesktopRelease @Win7_32Bit  @WinServer8_Standard   @Win7_64Bit @Win8_32Bit @Win8_64Bit @Win10_32Bit @Win10_64Bit @Win8.1_32Bit @WinXP_32Bit @WinXP_64Bit @WinVista_32Bit @WinVista_64Bit @WinServer8_64Bit @WinServer12_64Bit @WinServer16_64Bit @WinServer12R2_64Bit
  Scenario Outline: Validate asset plugin config json manifest different log levels-C1448278
    Given SSH connection established with remote test machine from tag
    And I fetch AgentCore EndPointID from agentCore config file from tag
    Given I read data from excel with rowIndex "<RowIndex>"
    And I send a configuration change Post request for mailbox API endpoint as "<EndPoint>"
    Then I should validate the status code as "200"OK
    And I fetch and validate asset plugin json for log level changes as "<LogLevel>" in monitoring
    #And I Close SSH Connection

    Examples: 
      | RowIndex  | EndPoint                     | LogLevel  |
      |        1  | /agent/v1/EndPointID/execute | INFO     |
      |        2  | /agent/v1/EndPointID/execute | ERROR    |
      |        3  | /agent/v1/EndPointID/execute | OFF      |
      |        4  | /agent/v1/EndPointID/execute | FATAL    |
      |        5  | /agent/v1/EndPointID/execute | DEBUG    |
      
      
 @Regression @DesktopRegression @WinServer3R2_64Bit @WinServer3_64Bit @WinServer3_32Bit @DesktopRelease @Win7_32Bit  @WinServer8_Standard   @Win7_64Bit @Win8_32Bit @Win8_64Bit @Win10_32Bit @Win10_64Bit @Win8.1_32Bit @WinXP_32Bit @WinXP_64Bit @WinVista_32Bit @WinVista_64Bit @WinServer8_64Bit @WinServer12_64Bit @WinServer16_64Bit @WinServer12R2_64Bit
  Scenario Outline: Validate asset plugin config json correctly updates with MaxLogFileSizeInMB-C2148024
    Given SSH connection established with remote test machine from tag
    And I fetch AgentCore EndPointID from agentCore config file from tag
    Given I read data from excel with rowIndex "<RowIndex>"
    And I send a configuration change Post request for mailbox API endpoint as "<EndPoint>"
    Then I should validate the status code as "200"OK
    And I fetch and validate asset plugin json for MaxFileSize changes as "<MaxFileSize>"
    Given I read data from excel with rowIndex "<RowIndex>"
    And I send a configuration restore Post request for mailbox API endpoint as "<EndPoint>"
    Then I should validate the status code as "200"OK
    #And I Close SSH Connection

    Examples: 
     | RowIndex | EndPoint                     | MaxFileSize |
     |        1 | /agent/v1/EndPointID/execute | 2     	 |

   
      
 @Regression @DesktopRegression @WinServer3R2_64Bit @WinServer3_64Bit @WinServer3_32Bit @DesktopRelease @Win7_32Bit  @WinServer8_Standard   @Win7_64Bit @Win8_32Bit @Win8_64Bit @Win10_32Bit @Win10_64Bit @Win8.1_32Bit @WinXP_32Bit @WinXP_64Bit @WinVista_32Bit @WinVista_64Bit @WinServer8_64Bit @WinServer12_64Bit @WinServer16_64Bit @WinServer12R2_64Bit
  Scenario Outline: Validate asset plugin config json correctly updates with OldLogFileToKeep-C2148025
    Given SSH connection established with remote test machine from tag
    And I fetch AgentCore EndPointID from agentCore config file from tag
    Given I read data from excel with rowIndex "<RowIndex>"
    And I send a configuration change Post request for mailbox API endpoint as "<EndPoint>"
    Then I should validate the status code as "200"OK
    And I fetch and validate asset plugin json for FileCount changes as "<FileCount>"
    Given I read data from excel with rowIndex "<RowIndex>"
    And I send a configuration restore Post request for mailbox API endpoint as "<EndPoint>"
    Then I should validate the status code as "200"OK
    #And I Close SSH Connection

    Examples: 
   | RowIndex | EndPoint                     | FileCount 	|
   |        1 | /agent/v1/EndPointID/execute | 2	        |

# notes

Pairing the Four Phases of System Auditing with Methodologies

1. Reconnaissance - Gathering information about the target
      1. Collect information
      2. Store information
2. Research - Finding known vulnerabilities and exploits on our target
      1. known vulnerabilities
      2. exploits
      3. Execution
            1. modify
            2. Compile
            3. Debug
            4. Run 
3. Validation - Modifying the exploit code to validate vulnerabilities
4. Reporting - Writing a report to share the results of the audit


## 1. Reconnaissance - Gathering information

### Store information : Basics

Organize and store this information as a database (excel sheet).

1. HOST: IP Address or URL
2. PORT: Open ports
3. PROTO: Protocols of the open ports
4. SERVICE: Services running on those ports
5. VERSION: Versions of those services
6. COMMENTS: Additional Information
      1. Operating system being used


### Collect information : Basics

1. Nmap
      1. Gather information about:
            1. open ports
            2. services running
            3. versions
            4. OS used
            5. etc...
      2. NSE: scripts to extend Nmap functionality, automating network tasks.
            1. advance network detection
            2. backdoor detection
            3. vulnerability detection
            4. exploit detection
      3. Options
            1. port range: -p(port-range) or use -p- to scan all ports
            2. TCP/UDP ports: -sT -sU
            3. versions: -sV
            4. OS: -O
            5. script tasks: --script=[smb-enum-shares/etc...] at /usr/share/nmap/scripts

2. Metasploit: Collects and Stores
      1. needs configuration
      2. includes workspaces
      3. creates targets databases
      4. db_nmap: integrates Nmap using db_nmap command
      5. init commands:
            1. starts the database server that metasploit use to store the data
                  1. service postgresql start
            2. initialize the db that metasploit use
                  1. msfdb init
            3. start metasploit
                  1. msfconsole 
            4. workspace
                  1. create a workspace
                        1. workspace -a [workspace-name]
                  2. check existing workspaces
                        1. workspace
                  3. change worspace
                        1. workspace [workspace-name]
            5. host
                  1. shows ip, mac address, name, OS
            6. services
                  1. shows revealed services info
            7. search type:[types] [keyword]
                  1. search for scanner modules by type and key
            8. use [scanner]
                  1. use a scanner module
            9. [scanner]$ show options
                  1.  configurations for the module
                  2.  some options are required to provide, like ip address of the target or RHOST, etc...
            10. [scanner]$ set [option] [value]
                  1.  set a value for a choosen option
            11. [scanner]$ run
                  1. launch the module


## 2. Research - Finding exploits for known vulnerabilities on our target

Based in Reconnaissance, find vulnerabilities on discovered ports/services.

Then, find exploits for those vulnerabilities:

1. Proof of concept/analysis of vulnerability
      1. Articles explaining where a vulnerability can be found
      2. Incomplete exploits
      3. Does not provide a workable exploit
2. Public exploits
      1. Written by community members
      2. Not effectively tested
      3. Risky to use
      4. Often need modifications
      5. Written in C++, Python, Ruby, Perl
3. Commercial exploits
      1. Developed by vendors
      2. Fully researched and tested in multiple environments
      3. Distributed as toolkits like Metasploit-framework

Then, the process for executing a Public Exploit

1. Modify
      * the exploit according to your needs (eg: LHOST, LPORT, RHOST, RPORT)
2. Compile
      * the raw code into an executable file
3. Debug
      * the code by looking after the errors and dependency issues
4. Run
      * the exploit on the target
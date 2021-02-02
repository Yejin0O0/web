// 내가 만든 자바 스크립트

//회원가입시 비밀번호 입력이 달라졌을 경우 나오는 문구
$(function () {
  $("#userPw").keyup(function () {
    $("#chkNotice").html("");
  });

  $("#userPwChk").keyup(function () {
    if ($("#userPw").val() != $("#userPwChk").val()) {
      $("#chkNotice").html("비밀번호 일치하지 않음<br><br>");
      $("#chkNotice").attr("color", "#f82a2aa3");
    } else {
      $("#chkNotice").html("비밀번호 일치함<br><br>");
      $("#chkNotice").attr("color", "#199894b3");
    }
  });
});

//schedule에서 달력만들기
onload = function () {
  //달력 설정
  var tableObj = document.createElement("table");
  tableObj.className = "table table-bordered table-responsive schedule-table";
  tableObj.dataAos = "fade-up";
  tableObj.dataAosDelay = "300";

  var theadObj = document.createElement("thead"); //요일
  var tbodyObj = document.createElement("tbody"); //날짜

  var trObj = document.createElement("tr");
  theadObj.className = "thead-light";
  //   var tr_list = []; // tr태그 Obj를 담을 리스트 변수

  var th_list = []; // th태그 Obj를 담을 리스트 변수
  var td_list = []; // td태그 Obj를 담을 리스트 변수
  var iObj = document.createElement("i");

  for (
    i = 0;
    i < 8;
    i++ //
  ) {
    th_list.push(document.createElement("th")); // th태그 Obj 생성
  }

  iObj.className = "fa fa-calendar";
  th_list[0].appendChild(iObj);
  th_list[1].innerHTML = "Mon";
  th_list[2].innerHTML = "Tue";
  th_list[3].innerHTML = "Wed";
  th_list[4].innerHTML = "Thu";
  th_list[5].innerHTML = "Fri";
  th_list[6].innerHTML = "Sat";
  th_list[7].innerHTML = "Sun";

  for (i = 0; i < th_list.length; i++) {
    //input리스트에 있는 obj 변수가 각각의 td 리스트의 obj 변수의 child가 됨.
    theadObj.appendChild(th_list[i]);
  }
  tableObj.appendChild(theadObj);
  // 달력 시작
  // 1주

  var spanObj = document.createElement("span");
  var smallObj = document.createElement("small");
  for (
    i = 0;
    i < 8;
    i++ //
  ) {
    td_list.push(document.createElement("td")); // td태그 Obj 생성
    td_list[i].className = "td";
  }
  smallObj.innerHTML = "week 1";
  smallObj.className = "week";
  td_list[0].appendChild(smallObj);
  td_list[0].className = "week";

  for (i = 1; i < td_list.length; i++) {
    td_list[i].innerHTML = i;
  }
  td_list[3].appendChild(spanObj);
  spanObj.innerHTML = "정기모임";

  for (i = 0; i < td_list.length; i++) {
    trObj.appendChild(td_list[i]);
  }
  tbodyObj.appendChild(trObj);

  // ---------------------------------------------------------------
  //  2주
  var td_list = [];
  var trObj = document.createElement("tr");
  var spanObj = document.createElement("span");
  var smallObj = document.createElement("small");
  for (
    i = 0;
    i < 8;
    i++ //
  ) {
    td_list.push(document.createElement("td")); // td태그 Obj 생성
    td_list[i].className = "td"; // 수정해야할수도
  }

  smallObj.innerHTML = "week 2";
  td_list[0].appendChild(smallObj);
  td_list[0].className = "week";

  for (i = 1; i < td_list.length; i++) {
    td_list[i].innerHTML = i + 7;
  }
  td_list[3].appendChild(spanObj);
  spanObj.innerHTML = "정기모임";

  for (i = 0; i < td_list.length; i++) {
    trObj.appendChild(td_list[i]);
  }
  tbodyObj.appendChild(trObj);
  // ---------------------------------------------------------------
  //  3주
  var td_list = [];
  var trObj = document.createElement("tr");
  var spanObj = document.createElement("span");
  var smallObj = document.createElement("small");
  for (
    i = 0;
    i < 8;
    i++ //
  ) {
    td_list.push(document.createElement("td")); // td태그 Obj 생성
    td_list[i].className = "td"; // 수정해야할수도
  }

  smallObj.innerHTML = "week 3";
  td_list[0].appendChild(smallObj);
  td_list[0].className = "week";

  for (i = 1; i < td_list.length; i++) {
    td_list[i].innerHTML = i + 14;
  }
  td_list[3].appendChild(spanObj);
  spanObj.innerHTML = "정기모임";

  for (i = 0; i < td_list.length; i++) {
    trObj.appendChild(td_list[i]);
  }
  tbodyObj.appendChild(trObj);
  // ---------------------------------------------------------------
  //  4주
  var td_list = [];
  var trObj = document.createElement("tr");
  var spanObj = document.createElement("span");
  var smallObj = document.createElement("small");
  for (
    i = 0;
    i < 8;
    i++ //
  ) {
    td_list.push(document.createElement("td")); // td태그 Obj 생성
    td_list[i].className = "td"; // 수정해야할수도
  }

  smallObj.innerHTML = "week 4";
  td_list[0].appendChild(smallObj);
  td_list[0].className = "week";

  for (i = 1; i < td_list.length; i++) {
    td_list[i].innerHTML = i + 21;
  }
  td_list[3].appendChild(spanObj);
  spanObj.innerHTML = "정기모임";

  for (i = 0; i < td_list.length; i++) {
    trObj.appendChild(td_list[i]);
  }

  tbodyObj.appendChild(trObj);
  //
  tableObj.appendChild(tbodyObj);

  document.getElementById("result").appendChild(tableObj);
};

//     //   th_list[4].colSpan = "2";}

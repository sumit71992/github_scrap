const URL = "https://api.github.com/orgs/octokit/repos?page=1&per_page=10";
document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0,
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector("footer"));
  //an initial load of some data
  getData();
});
function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    getData();
  }
}
function getData() {
  let main = document.querySelector(".main");

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item, index) => {
        let hero = document.createElement("div");
        hero.classList.add("hero");
        let short = document.createElement("div");
        short.classList.add("short", "short" + index);
        
        let full = document.createElement("div");
        full.classList.add("full", "full" + index);
        short.onclick = function () {
          if (document.querySelector(".full"+index).style.display == "block")
            document.querySelector(".full"+index).style.display = "none";
          else document.querySelector(".full"+index).style.display = "block";
        };
        let item1 = document.createElement("div");
        item1.classList.add("items");
        let item2 = document.createElement("div");
        item2.classList.add("items");
        let item3 = document.createElement("div");
        item3.classList.add("items");
        let item4 = document.createElement("div");
        item4.classList.add("items");
        let item5 = document.createElement("div");
        item5.classList.add("items");
        let item6 = document.createElement("div");
        item6.classList.add("items");
        let item7 = document.createElement("div");
        item7.classList.add("items");
        let item8 = document.createElement("div");
        item8.classList.add("items");
        let data1 = document.createElement("div");
        data1.classList.add("data");
        let data2 = document.createElement("div");
        data2.classList.add("data");
        let data3 = document.createElement("div");
        data3.classList.add("data");
        let data4 = document.createElement("div");
        data4.classList.add("data");
        let data5 = document.createElement("div");
        data5.classList.add("data");
        let data6 = document.createElement("div");
        data6.classList.add("data");
        let data7 = document.createElement("div");
        data7.classList.add("data");
        let data8 = document.createElement("div");
        data8.classList.add("data");
        let value1 = document.createElement("div");
        value1.classList.add("value");
        let value2 = document.createElement("div");
        value2.classList.add("value");
        let value3 = document.createElement("div");
        value3.classList.add("value");
        let value4 = document.createElement("div");
        value4.classList.add("value");
        let value5 = document.createElement("div");
        value5.classList.add("value");
        let value6 = document.createElement("div");
        value6.classList.add("value");
        let value7 = document.createElement("div");
        value7.classList.add("value");
        let value8 = document.createElement("div");
        value8.classList.add("value");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let span4 = document.createElement("span");
        let span5 = document.createElement("span");
        let span6 = document.createElement("span");
        let span7 = document.createElement("span");
        let span8 = document.createElement("span");
        let span9 = document.createElement("span");
        let span10 = document.createElement("span");
        let span11 = document.createElement("span");
        let span12 = document.createElement("span");
        let span13 = document.createElement("span");
        let span14 = document.createElement("span");
        let span15 = document.createElement("span");
        let span16 = document.createElement("span");
        span1.textContent = "Name:";
        span2.textContent = item.name;
        span3.textContent = "open_issues_count:";
        span4.textContent = item.open_issues_count;
        span5.textContent = "Url:";
        span6.textContent = item.url
        span7.textContent = "Language:";
        span8.textContent = item.language;
        span9.textContent = "License:";
        span10.textContent = item.license ? item.license.name : "MIT License";
        span11.textContent = "watchers_count:";
        span12.textContent = item.watchers;
        span13.textContent = "Owner:";
        span14.textContent = item.owner.login;
        span15.textContent = "Permissions:";
        span16.textContent = "Admin:"+ item.permissions.admin +", " +"push:" + item.permissions.push +", " +"pull:" + item.permissions.pull;
        

        data1.appendChild(span1);
        value1.appendChild(span2);
        data2.appendChild(span3);
        value2.appendChild(span4);
        data3.appendChild(span5);
        value3.appendChild(span6);
        data4.appendChild(span7);
        value4.appendChild(span8);
        data5.appendChild(span9);
        value5.appendChild(span10);
        data6.appendChild(span11);
        value6.appendChild(span12);
        data7.appendChild(span13);
        value7.appendChild(span14);
        data8.appendChild(span15);
        value8.appendChild(span16);
        
        
        item1.appendChild(data1);
        item2.appendChild(data2);
        item3.appendChild(data3);
        item4.appendChild(data4);
        item5.appendChild(data5);
        item6.appendChild(data6);
        item7.appendChild(data7);
        item8.appendChild(data8);
        item1.appendChild(value1);
        item2.appendChild(value2);
        item3.appendChild(value3);
        item4.appendChild(value4);
        item5.appendChild(value5);
        item6.appendChild(value6);
        item7.appendChild(value7);
        item8.appendChild(value8);
        main.appendChild(hero);
        hero.appendChild(short);
        short.appendChild(item1);
        short.appendChild(item2);
        short.appendChild(item3);
        short.appendChild(item4);
        hero.appendChild(full);
        full.appendChild(item5);
        full.appendChild(item6);
        full.appendChild(item7);
        full.appendChild(item8);
      });
    });
}
function show(a) {
  if (document.querySelector(".full" + a).style.display == "block")
    document.querySelector(".full" + a).style.display = "none";
  else document.querySelector(".full" + a).style.display = "block";
}

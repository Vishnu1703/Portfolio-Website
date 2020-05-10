import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experience-details",
  templateUrl: "./experience-details.component.html",
  styleUrls: ["./experience-details.component.scss"]
})
export class ExperienceDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let tabEl = document.getElementById("first_tab");
    tabEl.click();
  }

  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}

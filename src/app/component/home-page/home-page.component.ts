import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ProfileDetailsComponent } from "../profile-details/profile-details.component";
import { ExperienceDetailsComponent } from "../experience-details/experience-details.component";
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements AfterViewInit {
  constructor() {}
  expierenceDetails = false;
  componentName: any = ProfileDetailsComponent;
  ngAfterViewInit() {
    console.clear();

    const uls = document.querySelectorAll("nav ul");
    const links = <any>document.querySelectorAll("nav a");
    const light = <any>document.querySelector("nav .tubelight");

    let activeIndex = 0;
    let currentIndex = 0;
    let increment = 1;
    links.forEach((link, index) => {
      if (links[index].classList.contains("active")) {
        light.style.left = `${links[index].offsetLeft +
          light.offsetWidth / 4}px`;
      }

      link.addEventListener("click", e => {
        activeIndex = index;
        let t = setInterval(() => {
          if (activeIndex > currentIndex) increment = 1;
          else if (activeIndex < currentIndex) increment = -1;
          currentIndex += increment;

          links[currentIndex].classList.add("active");
          if (currentIndex != -1)
            links[currentIndex - increment].classList.remove("active");

          if (currentIndex == activeIndex) {
            e.target.classList.add("active");
            increment = 0;
            clearInterval(t);
          }
        }, 50);
        light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
      });
    });
  }

  changeTab(id) {
    switch (id) {
      case "1":
        this.componentName = ProfileDetailsComponent;
        break;
      case "2":
        this.componentName = ExperienceDetailsComponent;
        break;
      case "3":
        this.componentName = AboutMeComponent;
        break;
      case "5":
        this.componentName = GetInTouchComponent;
        break;
    }
  }
}

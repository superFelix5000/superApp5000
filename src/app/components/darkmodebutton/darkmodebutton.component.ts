import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmodebutton',
  templateUrl: './darkmodebutton.component.html',
})
export class DarkmodebuttonComponent implements OnInit {
    private readonly darkTheme = 'dark';
    private readonly lightTheme = 'light';
    private readonly theme = 'theme';
    private readonly darkBg = 'bg-slate-900';
    protected isDarkTheme = false;

    ngOnInit(): void {
        this.setMode();
    }

    switchMode(): void {
        if (this.isDarkTheme) {
            localStorage[this.theme] = this.lightTheme;
        } else {
            localStorage[this.theme] = this.darkTheme;
        }
        this.setMode();
    }

    private setMode(): void {
        if (
            localStorage[this.theme] === this.darkTheme ||
            (!(this.theme in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add(this.darkTheme);
            document.documentElement.classList.add(this.darkBg);
            localStorage[this.theme] = this.darkTheme;
            this.isDarkTheme = true;
        } else {
            document.documentElement.classList.remove(this.darkTheme);
            document.documentElement.classList.remove(this.darkBg);
            localStorage[this.theme] = this.lightTheme;
            this.isDarkTheme = false;
        }
    }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ThemeMode } from "src/models/theme-mode.model";

@Injectable({
    providedIn: 'root'
})
export class ThemeModeService {
    currentMode$: BehaviorSubject<ThemeMode> = new BehaviorSubject<ThemeMode>('light');

    setCurrentMode() {
        const initialMode =
            (typeof window !== "undefined" &&  window.localStorage.getItem("theme")
            ? window.localStorage.getItem("theme")
            : "light") as ThemeMode;

        this.currentMode$.next(initialMode);
        this.updateState(initialMode);
    }

    changeCurrentMode(mode: ThemeMode) {
        this.currentMode$.next(mode);

        this.updateState(mode);
    }

    updateState(mode: ThemeMode) {
        document.documentElement.classList.remove(
            mode === "dark" ? "light" : "dark"
        );
    
        document.documentElement.classList.add(mode);

        window.localStorage.setItem("theme", mode);
    }
}
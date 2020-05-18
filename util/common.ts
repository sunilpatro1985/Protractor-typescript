import { browser } from "protractor";

export class common{
    public isAngular(flag: boolean){
        browser.ignoreSynchronization = !flag;
    }
}
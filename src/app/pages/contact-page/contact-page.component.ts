import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base.component';
import { SiteSettingService } from 'src/app/services/siteSetting.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends BaseComponent implements OnInit {

    isToggled = false;
    campuses:any[]=[]
    contactForm:UntypedFormGroup
    message:any=""
	
    constructor(
        private settingService:SiteSettingService,
        private fb:UntypedFormBuilder
    ) {
        super()
    }

    ngOnInit(): void {
        this.getCampuses()
        this.createForm()
    }

    getCampuses(){
        this.settingService.getCampuses().subscribe((resp:any)=>{
            console.log(resp)
            this.campuses = resp
        })
    }

    createForm(){
        this.contactForm = this.fb.group({
            fullName:['',Validators.required],
            email:['',[Validators.required,Validators.email]],
            phoneNumber:[''],
            subject:['',Validators.required],
            message:['',[Validators.required,Validators.maxLength(1000)]]
        })
    }

    submit(){

        console.log(this.contactForm.value)
        if(this.contactForm.valid){

            console.log(this.contactForm.value)

            let data = Object.assign({},this.contactForm.value);
            this.settingService.addContactData(data).subscribe((resp:any)=>{
                console.log("Kayıt OK",resp)
                if(resp.id>0){
                    this.message="Ihre Anfrage wurde weitergeleitet"
                    this.contactForm.reset()

                }
            })
        }
        else{
            this.contactForm.markAllAsTouched()
        }

        // var name = form.name;
        // console.log(name);
        
        // var email = form.email;
        // console.log(email);

        // var number = form.number;
        // console.log(number);
        
        // var subject = form.subject;
        // console.log(subject);
        
        // var message = form.message;
        // console.log(message);
    }

}
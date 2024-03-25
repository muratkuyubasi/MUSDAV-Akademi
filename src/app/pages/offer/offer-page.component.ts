import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base.component';
import { SiteSettingService } from 'src/app/services/siteSetting.service';

@Component({
    selector: 'app-offer-page',
    templateUrl: './offer-page.component.html',
    styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent extends BaseComponent implements OnInit {

    isToggled = false;
    campuses:any[]=[]
    offerForm:UntypedFormGroup
    message:any=""
    showForm:boolean=false;
	
    constructor(
        private settingService:SiteSettingService,
        private fb:UntypedFormBuilder
    ) {
        super()
    }

    ngOnInit(): void {
        this.createForm()
    }

    setForm(type){
        this.showForm = true
        if(type==1){
            this.offerForm.patchValue({offerType:0})
        }
        if(type==2){
            this.offerForm.patchValue({offerType:1})
        }
    }   

    createForm(){
        this.offerForm = this.fb.group({
            firstName:['',Validators.required],
            lastName:['',Validators.required],
            offerType:[0],
            email:['',[Validators.required,Validators.email]],
            phoneNumber:['',Validators.required],
            gender:[0],
            birthDate:[''],
            street:[''],
            postalCode:[''],
            state:[''],
            description:[''],
            lessons:['',Validators.required]
        })
    }

    submit(){

        console.log(this.offerForm.value)
        if(this.offerForm.valid){

            console.log(this.offerForm.value)

            let data = Object.assign({},this.offerForm.value);
            this.settingService.addOffer(data).subscribe((resp:any)=>{
                console.log("Kayıt OK",resp)
                if(resp.id>0){
                    this.message="Ihre Anfrage wurde weitergeleitet"
                    this.offerForm.reset()

                }
            })
        }
        else{
            this.offerForm.markAllAsTouched()
        }

      
    }

}
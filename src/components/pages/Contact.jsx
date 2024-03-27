import Button from "../button/Button";
function Contact(){
    return(
        <>
            <h2 className="text-2xl mb-8"> Contact </h2>
            <div className="flex justify-start items-start">

            <div className="contactInfo w-5/12 flex flex-col">
                <address className="flex justify-start items-center mb-5">
                    <svg fill="#09B188" xmlns="http://www.w3.org/2000/svg"
                         width="20px" viewBox="0 0 395.71 395.71">
                    <g>
                        <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                    </g>
                    </svg>
                    <span  className="ml-4">Tbisili, Lisi</span>
                </address>
                <a href="mailto:" className="flex justify-start items-center mb-5">
                    <svg width="20px" fill="#09B188" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z" fill="#09B188"/>
                        <path d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z" fill="#09B188"/>
                    </svg>
                    <span className="ml-4">ReactxUsaid@gmail.com</span>
                    </a>
                <span className="flex justify-start items-center mb-5">
                    <svg height="20px" fill="#09B188" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <g>
                            <path className="st0" d="M256,47.18C127.063,47.18,0,97.628,0,155.555c0,49.742,0,54.334,0,54.644c0,13.168,10.67,23.838,23.838,23.838
                                h90.602c13.168,0,23.837-10.67,23.837-23.838v-41.116c0-12,8.93-22.132,20.83-23.647c0,0,32.619-6.7,96.893-6.7
                                s96.892,6.7,96.892,6.7c11.901,1.514,20.83,11.647,20.83,23.647V210.2c0,13.168,10.67,23.838,23.837,23.838h90.602
                                c13.168,0,23.838-10.67,23.838-23.838c0-0.311,0-4.903,0-54.644C512,97.628,384.938,47.18,256,47.18z"/>
                            <path className="st0" d="M348.499,210.2v-39.913l-0.687-0.142c-0.247-0.049-31.55-6.184-91.812-6.184
                                c-60.262,0-91.564,6.134-91.876,6.198l-0.622,0.127V210.2c0,27.057-22.012,49.062-49.062,49.062H51.39v141.992
                                c0,35.109,28.458,63.566,63.56,63.566H397.05c35.102,0,63.56-28.458,63.56-63.566V259.262h-63.05
                                C370.51,259.262,348.499,237.257,348.499,210.2z M331.057,368.105v33.92h-33.913v-33.92H331.057z M331.057,314.465v33.921h-33.913
                                v-33.921H331.057z M331.057,260.833v33.913h-33.913v-33.913H331.057z M272.96,368.105v33.92h-33.913v-33.92H272.96z
                                 M272.96,314.465v33.921h-33.913v-33.921H272.96z M239.047,294.746v-33.913h33.913v33.913H239.047z M214.863,368.105v33.92H180.95
                                v-33.92H214.863z M214.863,314.465v33.921H180.95v-33.921H214.863z M214.863,260.833v33.913H180.95v-33.913H214.863z"/>
                        </g>
                    </svg>
                    <span className="ml-4">(+995) 555 55 55 55</span>
                </span>
            </div>
            <div className="contactForm flex flex-col items-stretch justify-stretch w-7/12">
                <input type="text" placeholder="Subject" className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
                <input type="email" placeholder="Email" className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"/>
                <textarea cols="30" rows="10" className="bg-w pt-2 pb-2 mb-5 border-gray-97 border border-opacity-30 rounded-md pl-4 pr-4"> Message Text </textarea>
                <Button text='Send'/>
            </div>
            </div>

        </>
    )
}

export default Contact;
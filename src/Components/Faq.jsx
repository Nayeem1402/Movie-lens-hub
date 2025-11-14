 
import RequestForMovie from './RequestForMovie'
 

export default function Faq() {
    return (
        <div className='w-10/12 mx-auto mt-10 flex flex-col  justify-center md:flex-row gap-10 '>
            <div className='w-full md:w-1/2'>
                <h1 className="text-center font-black text-4xl my-10 w-full">FAQ</h1>
                <div className='flex justify-center flex-col gap-3'>
                      <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">Where is my profile information?</div>
                        <div className="collapse-content text-sm">After you purches our any Suscribtion then the profile information will be available in your Navbar</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                  

                </div>
            </div>

            <RequestForMovie className='w-full md:w-1/2'></RequestForMovie>

        </div>)
}

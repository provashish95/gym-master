import React from 'react';


const Blogs = () => {
    return (
        <section className='container my-4 '>
            <div className="row border border-2 py-3 blogs-text">
                <h4><span ><i class="fa-solid fa-circle-arrow-right"></i></span> Difference between authorization and authentication ?</h4>
                <p>Authentication verifies who the user is or prove yourself.In authentication process, users or persons are verified.  Authentication is done before the authorization process and it needs usually user's login details.and we can say Authentication determines whether the person is user or not. For example is user login process.</p>
                <p>And Other one is authorization , so 	Authorization determines what resources a user can access.While in authorization process, person's or user's authorities are checked for accessing the resources.After authentication process  users or persons are validated.	While this process is done after the authentication process.Authorization needs user's privilege or security levels. After successfully user login process than user can access provided pages or files this is called authorization</p>

                <h4><span><i class="fa-solid fa-circle-arrow-right"></i></span> Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web development.It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.We can use firebase cause firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI.Firebase is a good choice if we want to deploy our projects and get live website link for our projects and firebase can provided us simple authentication system .</p>

                <p className='fw-bold text-muted'>Alternatives to firebase authentication: </p>
                <div className='row'>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <ul>
                            <li>MongoDB</li>
                            <li>Auth0</li>
                            <li>Okta</li>
                            <li>JSON Web Token</li>
                            <li>Keycloak</li>
                            <li>Amazon Cognito</li>
                            <li>LoginRadius</li>
                            <li>Back4App</li>
                            <li>Parse</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <ul>
                            <li>AWS Amplify</li>
                            <li>Backendless</li>
                            <li>Kuzzle</li>
                            <li>Supabase</li>
                            <li>appwrite</li>
                            <li>Hasura</li>
                            <li>Nhost</li>
                            <li>Deployd</li>
                        </ul>
                    </div>
                </div>
                <h4><span><i class="fa-solid fa-circle-arrow-right"></i></span> What other services does firebase provide other than authentication?</h4>
                <span className='fw-bold text-muted'>Cloud Messaging </span><span>Firebase allows us to deliver and receive messages in a more reliable way across platforms.</span>
                <span className='fw-bold text-muted'>Test Lab</span><span>Test in the lab instead on your users.</span>
                <span className='fw-bold text-muted'>Hosting</span><span>Firebase delivers web content faster.</span>
                <span className='fw-bold text-muted'>Remote Configuration</span><span>It allows us to customize our app on the go.</span>
                <span className='fw-bold text-muted'>Dynamic Links</span><span>Dynamic Links are smart URLs which dynamically change behavior for providing the best experience across different platforms. These links allow app users to take directly to the content of their interest after installing the app - no matter whether they are completely new or lifetime customers.</span>
                <span className='fw-bold text-muted'>Crash Reporting</span><span>It keeps our app stable.</span>
                <span className='fw-bold text-muted'>Real-time Database</span><span>It can store and sync app data in real-time.</span>
                <span className='fw-bold text-muted'>Storage</span><span>We can easily store the file in the database.</span>
                <span className='fw-bold text-muted'>Notifications</span><span>We can manage information campaigns very easily, including the ability to set and schedule messages to engage users at the right time of day. These notifications are completely free. These are unlimited for both iOS and Android. There is only one dashboard to worry about, and if we integrate with Firebase Analytics, we can use various user segmentation features.</span>
                <span className='fw-bold text-muted'>AdWords</span>
                <span className='fw-bold text-muted'>App Indexing</span>
                <span className='fw-bold text-muted'>Invites</span>

                <div className='d-flex justify-content-center align-items-center my-5'>
                    <div className='w-50 mx-auto bg-black' style={{ height: '1px' }}></div>
                    <p className='mx-4'><span><i class="fa-solid fa-book-open-reader fs-3"></i></span></p>
                    <div className='w-50 bg-black' style={{ height: '1px' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
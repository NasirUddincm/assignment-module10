<script setup>

</script>
<template>
    <section class="bg-warning-subtle py-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
                <div class="col">
                    <div class="info-wrap w-100 p-md-5 p-4">
                        <h3>Let's get in touch</h3>
                        <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                        <div class="dbox mb-2 w-100 d-flex align-items-start">
                            <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-map-marker border border-black rounded-circle p-3"></span>
                            </div>
                            <div class="text ps-3">
                            <p>
                                <span>Address:</span> Bisshawas Builders, Dhaka 1205
                            </p>
                            </div>
                        </div>
                        <div class="dbox mb-2 w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-phone border border-black rounded-circle p-3"></span>
                            </div>
                            <div class="text ps-3">
                                <p>
                                    <span>Phone:</span> 
                                    <a href="#" class="text-decoration-none text-dark">+8801779055517</a>
                                </p>
                            </div>
                        </div>
                        <div class="dbox mb-2 w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-paper-plane border border-black rounded-circle p-3"></span>
                            </div>
                            <div class="text ps-3">
                                <p>
                                    <span>Email:</span> 
                                    <a href="#" class="text-decoration-none text-dark">
                                        <span class="">aloronit@gmail.com</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div class="dbox mb-2 w-100 d-flex align-items-center">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="fa fa-globe border border-black rounded-circle p-3"></span>
                            </div>
                            <div class="text ps-3">
                                <p>
                                    <span>Website</span> 
                                    <a href="#" class="text-decoration-none text-dark">
                                        aloronit.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                        
                </div>
                <div class="col">
                    <div class="shadow rounded-4 p-5 bg-light">
                        <div class="text-center">
                            <h3 class="text-gradient text-primary">Contact us</h3>
                            <p class="mb-0">
                                For further questions, about your business solution & software requirment, please email aloronit@gmail.com
                                or contact using our contact form.
                            </p>
                            </div>
                        <!-- Bootstrap 5 starter form -->
                        <form id="contactForm">
                    
                        <!-- Name input -->
                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input class="form-control" id="name" type="text" placeholder="Name" />
                        </div>
                    
                        <!-- Email address input -->
                        <div class="mb-3">
                            <label class="form-label" for="emailAddress">Email Address</label>
                            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" />
                        </div>
                    
                        <!-- Message input -->
                        <div class="mb-3">
                            <label class="form-label" for="message">Message</label>
                            <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
                        </div>
                    
                        <!-- Form submit button -->
                        <div class="d-grid">
                            <button class="btn btn-success btn-lg" type="submit">Submit</button>
                        </div>
                    
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
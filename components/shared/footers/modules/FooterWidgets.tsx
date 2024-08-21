// import React from 'react';
// //import {ConnectPlugin} from '../../../connectPlugins';
// import Link from 'next/link';
// import { connect } from 'react-redux';
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { PhoneOutlined, MailOutlined, PhoneFilled, MailFilled } from '@ant-design/icons';
// import { useSelector } from 'react-redux';
// //import { hitVisitor, getVisitor } from "../../../../api";

// const FooterWidgets = ({ footerDet: any, footerPage: any }) => {
//     const router = useRouter();
//     const siteSettings = useSelector(s => s.setting)

//     const handleClick = () => {
//         // alert('ssss')
//         // router.push("/inquirybulk");
//         window.location = "/inquirybulk";
//     }



//     let footerData = [
        
//         {
//             "FooterColumnName": "QUICK LINKS",
//             active: true,
//             "linkedPages": [
//                 { title: "About us", redirectUrl: "/page-detail/about-us1" },
//                 { title: "Contact us", redirectUrl: "/contact" },
//                 { title: "Track Your Order", redirectUrl: "/page-detail/order-status" },
//                 { title: "FAQ", redirectUrl: "/page-detail/faq" },
//                 // { title: "What are we upto", redirectUrl: "/page-detail/what-are-we-upto" },
//                 // { title: "Franchise", redirectUrl: "/franchise" },
//                 // { title: "News & Events", redirectUrl: "/page-detail/news-and-events" },
//                 // { title: "Innovations", redirectUrl: "/page-detail/innovations" },
//                 // { title: "Blogs", redirectUrl: "/page-detail/blog" },
//                 // { title: "Store Locator", redirectUrl: "/page-detail/store-locator--pick-and-drop" }
//             ]
//         },
//         // {
//         //     "FooterColumnName": "LINKS",
//         //     active: true,
//         //     "linkedPages": [
//         //         { title: "Lookbook", redirectUrl: "/page-detail/lookbook" },
//         //         { title: "Casual", redirectUrl: "/page-detail/casual" },
//         //         { title: "Formal", redirectUrl: "/page-detail/formal" },
//         //         { title: "Ethics", redirectUrl: "/page-detail/ethics" }

//         //     ]
//         // },
//         {
//             "FooterColumnName": "OUR POLICIES",
//             active: true,
//             "linkedPages": [
//                 { title: "Privacy policy", redirectUrl: "/page-detail/privacy" },
//                 { title: "Shipping policy", redirectUrl: "/page-detail/privacy" },
//                 { title: "Return and Refund", redirectUrl: "/page-detail/return-and-refund-policy" },
//                 { title: "Feedback", redirectUrl: "/feedback" },
//                 // { title: "Loyalty", redirectUrl: "/page-detail/loyality" },
//                 // { title: "Shoes", redirectUrl: "/page-detail/shoes" },
//                 // { title: "Redchief club", redirectUrl: "/page-detail/redchief-club" },
//                 // { title: "Corporate Gifting", redirectUrl: "/corporate-gifting" },
//             ]
//         },
//         {
//             "FooterColumnName": "CATEGORIES",
//             active: true,
//             "linkedPages": [
//                 { title: "Terms and Conditions", redirectUrl: "/page-detail/return-and-refund-policy" },
//                 { title: "Disclaimer", redirectUrl: "/page-detail/disclaimer" },
//                 { title: "Customer Care", redirectUrl: "/page-detail/customer-care" }
//             ]
//         },
//         {
//             "FooterColumnName": "SOCIAL",
//             active: true,
//             "linkedPages": [
//                 { title: "Facebook", redirectUrl: "/#" },
//                 { title: "Instagram", redirectUrl: "/#" },
//                 { title: "Youtube", redirectUrl: "/#" }

//             ]
//         },
//         // {
//         //     "FooterColumnName": "CAREER",
//         //     active: true,
//         //     "linkedPages": [
//         //         { title: "Join our troop", redirectUrl: "/join-our-troop" }

//         //     ]
//         // }
//     ]
//     return (
//         <div>
//             {/* <div class="container-fluid">
// 		<div class="bAddress-Wrapper">
// 			<div class="registeredAdd">
// 				<h2>REGISTERED ADDRESS</h2>
// 				<p>Plot no. 530, Sector 8, IMT Manesar <br />
// 					Gurgaon (Haryana) 122052</p>
// 			</div>
// 			<div class="mailAdd text-right">
// 				<h2>MAIL US</h2>
// 				<p>9wp7+mc7, Kankrola, IMT Manesar,<br />
// 					Gurugram (Haryana)122505
// 				</p>
// 			</div>
// 		</div>
// 	</div> */}
//             {/* <footer>
//             <div class="container-fluid">
// 			<div class="footerTop">
// 				<div class="row">
// 					<div class="col-md-7">
// 						<div class="fRight">
// 							<div class="row">
// 								<div class="col-md-4 col-sm-6">
// 									<h2>QUICK LINKS</h2>
// 									<ul>
// 										<li><Link href="/page-detail/about-us1" title="About Us">About Us</Link></li>
// 										<li><Link href="/contact" title="Contact Us">Contact Us</Link></li>
// 										<li><Link href="/page-detail/order-status" title="Track my order">Track my order</Link></li>
// 										<li><Link href="/page-detail/faq" title="FAQ’S">FAQ’S</Link></li>
// 									</ul>
// 								</div>

// 								<div class="col-md-4 col-sm-6">
// 									<h2>OUR POLICIES</h2>
// 									<ul>
// 										<li><Link href="/page-detail/privacy" title="Privacy Policy">Privacy Policy</Link></li>
// 										<li><Link href="/page-detail/shipping-policy" title="Shipping policy">Shipping policy</Link></li>
// 										<li><Link href="/page-detail/return-policy" title="Return and Refund">Return and Refund</Link></li>
// 										<li><Link href="/feedback" title="Feedback">Feedback</Link></li>
// 									</ul>
// 								</div>


// 								<div class="col-md-4 col-sm-6">
// 									<h2>CATEGORIES</h2>
// 									<ul>
// 										<li><Link href="/page-detail/terms-and-conditions" title="Terms and Conditions">Terms and Conditions</Link></li>
// 										<li><Link href="/page-detail/disclaimer" title="Disclaimer">Disclaimer</Link></li>
//                                         <li><Link href="/page-detail/customer-care" title="Customer Care">Customer Care</Link></li>
// 									</ul>
// 								</div> 
//                                 <div class="col-md-3 col-sm-6">
// 									<h2>Social</h2>
// 									<ul>
// 										<li><Link href="/#" title="Facebook">Facebook</Link></li>
// 										<li><Link href="/#" title="Instagram">Instagram</Link></li>
//                                         <li><Link href="/#" title="Youtube">Youtube</Link></li>
// 									</ul>
// 								</div> 
// 							</div>
// 						</div>
// 					</div>
// 					<div class="col-md-5">
// 						<div class="fHaveQue-wrapper">

// 							<div class="fHaveQue">
// 								<h2>Have a question or<br />
// 									want to place an order?</h2>
// 								<div class="HelplineNum">
// 									<div class="headText text-green mt-4">Helpline No.-</div>
// 									Call: +91 99999 99999 <br />
// 									(Mon-Sun: 9am-7pm)
// 								</div>
// 								<img src="/static/img/fBottom.jpg" alt="Footer img" />

// 							</div>
// 						</div>
// 					</div>

// 				</div>
// 			</div>

// 		</div>
// 		<div class="f-bottom">
// 			<div class="container-fluid">
// 				<img src="/static/img/img01.png" alt="img01" />
// 				<img src="/static/img/img02.png" alt="img02" />
// 				<img src="/static/img/img03.png" alt="img03" />
// 				<img src="/static/img/img04.png" alt="img04" />
// 				<img src="/static/img/img05.png" alt="img05" />
// 				<img src="/static/img/img06.png" alt="img06" />
// 				<img src="/static/img/img07.png" alt="img07" />
// 				<img src="/static/img/img08.png" alt="img08" />
// 				<img src="/static/img/img09.png" alt="img09" />
// 				<img src="/static/img/img10.png" alt="img10" />
// 			</div>
// 		</div>
//         </footer> */}
//             <footer>
//                 <div class="container-fluid">
//                     <div class="footerTop">
//                         <div class="row">
//                             <div class="col-md-3">
//                                 <div class="mb-4 f-logo"><img src="/static/img/procurelogo.svg" /></div>
//                                 <div className='f-intro'>
//                                     <p > Suppliers of Unparalleled Packaging Materials for Businesses, Catering to Multiple Industries Across the Globe!</p>
//                                     <div className='social-icon'>
//                                         <a href="https://www.instagram.com/therrgroup/" target="_blank" className="instagram">
//                                             {/* <i className="fa fa-instagram" style={{fontSize: "16px"}}></i> */}
//                                             <img src='/static/img/instagram.svg' alt='' />
//                                         </a>
//                                         <a href=" https://www.linkedin.com/company/r-r-group/" target="_blank" className="linkedin">
//                                             {/* <i className="fa fa-linkedin" style={{fontSize: "16px"}}></i> */}
//                                             <img src='/static/img/linkedin.svg' alt='' />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-md-4">
//                                 <div class="fRight">
//                                     <div class="row">
//                                         <div class="col-md-6 col-sm-6 fontSizeH3">
//                                             <h3 className='fontBarlow'>QUICK LINKS</h3>
//                                             <ul>
//                                                 <li><Link href="/page-detail/about-us1" title="About Us">About Us</Link></li>
//                                                 <li><Link href="/contact" title="Contact Us">Contact Us</Link></li>
//                                                 {/* <li><Link href="/page-detail/order-status" title="Track my order">Track my order</Link></li> */}
//                                                 <li><Link href="/faq" title="FAQ’S">FAQ’S</Link></li>

//                                                 <li><Link href="/#" title="Bulk Enquiry">
//                                                     <a onClick={(e) => handleClick()}>Bulk Enquiry</a>
//                                                 </Link></li>
//                                             </ul>
//                                         </div>

//                                         <div class="col-md-6 col-sm-6 fontSizeH3">
//                                             <h3 className='fontBarlow'>OUR POLICIES</h3>
//                                             <ul>
//                                                 <li><Link href="/page-detail/privacy-policy" title="Privacy Policy">Privacy Policy</Link></li>
//                                                 <li><Link href="/page-detail/shipping-policy" title="Shipping policy">Shipping Policy</Link></li>
//                                                 <li><Link href="/page-detail/return-and-refund-policy" title="Return and Refund">Return and Refund</Link></li>
//                                                 <li><Link href="/feedback" title="Feedback">Feedback</Link></li>
//                                                 <li><Link href="/page-detail/terms-and-conditions" title="Terms and Conditions">Terms and Conditions</Link></li>

//                                             </ul>
//                                         </div>


//                                         <div class="col-md-4 col-sm-6 d-none">
//                                             <h2>CATEGORIES</h2>
//                                             <ul>
//                                                 <li><Link href="/page-detail/terms-and-conditions" title="Terms and Conditions">Terms and Conditions</Link></li>
//                                                 <li><Link href="/page-detail/disclaimer" title="Disclaimer">Disclaimer</Link></li>
//                                                 <li><Link href="/page-detail/customer-care" title="Customer Care">Customer Care</Link></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-md-3">
//                                 <div class="fHaveQue-wrapper">
//                                     <div class="fHaveQue fontSizeH3">
//                                         <h3 className='fontBarlow'> CONTACT US</h3>
//                                         <p>Plot no. 530, Sector 8, IMT Manesar<br />
//                                             Gurgaon (Haryana) 122052</p>

//                                         {/* <h5 className='fontBarlow'>FlipKart only</h5>
//                                         <div className='d-flex align-items-center'><PhoneOutlined rotate={90} /><span className='ml-2'>+91-{siteSettings.footerDet.meeshoSupportPhonenumber}</span></div>
//                                         <div className='d-flex align-items-center'><MailOutlined /><span className='ml-2'>{siteSettings.footerDet.meeshoSupportEmail}</span></div>
//                                         <h5 className='fontBarlow mt-4'>Swiggy and Food packaging</h5>
//                                         <div className='d-flex align-items-center'><PhoneOutlined rotate={90} /><span className='ml-2'>+91-{siteSettings.footerDet.flipKartSupportPhonenumber}</span></div>
//                                         <div className='d-flex align-items-center'><MailOutlined /><span className='ml-2'>{siteSettings.footerDet.flipKartSupportEmail}</span></div> */}
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* <div class="col-md-2">
//                                 <div className='customer-support-timing'>
//                                     <div> Call between Office Hours</div>
//                                     <div> Weekdays: 10 am to 7 pm</div>
//                                     <div> Sunday: Closed</div>
//                                 </div>
//                                 <div className='for-sale-inquiry mt-4'>
//                                     <strong className='blink_me sale-footer-title'>For Sale Enquiry</strong>
                                    
//                                     <div className='d-flex align-items-center'><PhoneOutlined rotate={90} /><span className='ml-2'>+91-9289487633</span></div>
//                                     <div className='d-flex align-items-center'><MailOutlined /><span className='ml-2'>sales@therrgroup.In</span></div>
//                                 </div>
//                             </div> */}

//                         </div>
//                     </div>

//                 </div>
//                 <div class="f-bottom">
//                     <div class="container-fluid">
//                         <div class="row">
//                             <div class="col-md-8"><p>Copyright &copy; 2023 The RR Group. All rights reserved.</p></div>
//                             <div class="col-md-4 footer-content">
//                                 <ul class="list-inline">
//                                     {/* <li class="list-inline-item"><a href="/#" title="Home">Home</a></li> */}
//                                     {/* <li class="list-inline-item"><Link href="/#" title="Home">Home</Link></li> */}
//                                     {/* <li class="list-inline-item"><Link href="/contact" title="Contact">Contact</Link></li> */}
//                                     {/* <li class="list-inline-item"><a href="/contact" title="Contact">Contact</a></li> */}
//                                     <img src="/static/img/Payment-Option.svg" />
//                                     <li></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//             {/* <div className="ps-footer__widgets" style={{ paddingBottom: "0px" }}>
//                 <div className="ftr-top"> */}
//             {/* <div className="flex ftrtop-lft">
//                 <aside className="widget widget_footer">
//                     <div className="ps-custom-footer-container">
//                         {footerPage&&footerPage.map((page)=>(
//                             <div className="footer-column-container">
//                             <h4 className="">{page.groupName}</h4>
                           


//                             {page && page.page.map(pagedet => (
//                                 //  <Link href="/page-detail/[pdid]" as={`/page-detail/${pagedet.slugName}`} key={pagedet.pageId}>
                                
//                                     // <p onClick={() => router.push('/page-detail/[pdid]')}  as={`/page-detail/${pagedet.pageId}`} key={pagedet.pageId}>{pagedet.title}</p>
                                    
//                                 //   </Link>S

//                                 <>
//                                 <Link href="/page-detail/[pdid]" as={`/page-detail/${pagedet.slugName}`} key={pagedet.pageId}><p>{pagedet.title}</p></Link>
//                                 </>
//                             ))}
//                         </div>
//                         ))}  
                                 
//                     </div>
                    
                   
//                 </aside>
//             </div> */}
//             {/* <div className="flex ftrtop-lft">
//                         <aside className="widget widget_footer">
//                             <div className="ps-custom-footer-container">
//                                 {footerData && footerData.map((page) => (
//                                     <div className="footer-column-container">
//                                         <h4 className="">{page.FooterColumnName}</h4>



//                                         {page && page.linkedPages.map(pagedet => (
//                                              <Link href="/page-detail/[pdid]" as={`/page-detail/${pagedet.slugName}`} key={pagedet.pageId}>

//                                             <p onClick={() => router.push('/page-detail/[pdid]')}  as={`/page-detail/${pagedet.pageId}`} key={pagedet.pageId}>{pagedet.title}</p>

//                                               </Link>S

//                                             <>
//                                                 <Link href={pagedet.redirectUrl} ><p>{pagedet.title}</p></Link>
//                                             </>
//                                         ))}
//                                     </div>
//                                 ))}

//                             </div>


//                         </aside>
//                     </div> */}

//             {/* <div>
//                     <h4 style={{ color: "white" }}>Social</h4>
//                     <ul className="ps-list--social" style={{ display: "block" }}>

//                         <li>
//                             <a className="facebook" href={footerDet.facebook} target="_blank">
//                                 <img src="/static/img/facebook.png" />
//                             </a>
//                         </li>
//                         <li>
//                             <a className="twitter" href={footerDet.twitter} target="_blank">
//                                 <img src="/static/img/twitter.png" />
//                             </a>
//                         </li>
//                         <li>
//                             <a className="google-plus" href={footerDet.google} target="_blank">
//                             </a>
//                         </li>

//                     </ul>
//                 </div>
//                 <div className="ftrtop-rht" style={{}}>
//                     <aside className="widget widget_footer widget_contact-us">
//                         <h4 className="widget-title1 footer-color">Contact us</h4>
//                         <div className="widget_content footer-contact-info">
//                             <p className="footer-color"><i class="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "25px", paddingRight: "16px" }}></i></p>
//                             <h3 className="footer-color"><i class="fa" style={{ fontSize: "25px", paddingRight: "15px" }}>&#xf095;</i>{footerDet.storeTelephone}</h3>

//                             <p className="footer-color"><i class="fa fa-envelope" aria-hidden="true" style={{ fontSize: "25px", paddingRight: "15px", color: "white" }}></i>
//                                 {footerDet.storeAddress}
//                                 <a href={"mailto:" + footerDet.storeEmail} target="_blank">{footerDet.storeEmail}</a>
//                             </p>
//                             <p className="footer-color"><i class="fa fa-clock-o" aria-hidden="true" style={{ fontSize: "25px", paddingRight: "15px", color: "white" }}></i>Mon - Sun / 9:00AM - 8:00PM</p>
//                         </div>
//                         <a className="google-plus" href="https://play.google.com/store/apps/details?id=com.piccosoft.spurtcommerce" target="_blank">
//                             <img src="/static/img/playstore.png" />
//                         </a>
//                     </aside>
//                 </div> */}

//             {/* </div>

//             </div>
//             {/* <div class="visitor-count">
//                 Total Visitor - {visitorCounter}
//             </div> */}
//         </div>
//     )

// }
// const mapStateToProps = (state: any) => {
//     return state = state.setting
// }


// export default connect(mapStateToProps)(FooterWidgets);
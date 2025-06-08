import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return null;
    }
    catch (error) {
        console.log(error.message);
    }
}

export const Contact = () => {
    return (
        <>
            <section className="container section-contact">
                <div className="container">
                    <h2 className="section-common--heading">Contact Us</h2>
                    <p className="section-common--subheading">
                        Get in touch with us. We are always here to help you.
                    </p>
                </div>

                <div className="grid grid-two--cols">
                    <div className="contact-content">
                        <Form method="POST" action="/Contact">
                            <div className="grid grid-two-cols mb-3">
                                <div>
                                    <label htmlFor="username">Full Name</label>
                                    <input type="text" name="fName" id="username" required autoComplete="off" placeholder="Enter Full Name" />
                                </div>

                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" required autoComplete="off" id="email" placeholder="abc@zeeshu.com" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols='30' rows='10' placeholder="we are always here to help you."></textarea>
                            </div>
                            <div>
                                <button className="btn">Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    );
};






// const [contact, setContact] = useState({
//     fName: '',
//     email: '',
//     message: '',
// });

// const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setContact((prev) => ({
//         ...prev,
//         [name]: value,
//     }));
// };

// const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log(contact);
// }
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    console.log(window.innerWidth);
    if (error.status === 404)
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="Error 404" />
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page you were looking for couldn't be found
                        </p>
                        <p className="p-b">... Back to previous Page.</p>
                    </div>
                </div>
                <button className="btn" onClick={handleGoBack}>Go Back</button>
            </section>
        );
    return (
        <>
        <h1>The Page you are looking for doesn't exit.</h1>
        <button className="btn" onClick={handleGoBack}>Go Back</button>
        </>
    );
};


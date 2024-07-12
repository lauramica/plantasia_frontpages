import "../css/ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <div class="error-background">
        <div class="container">
          <p class="error-sorry">Sorry,</p>
          <p class="error-text">We couldn't find that page</p>
          <button class="btn-error-page">Return to home</button>
        </div>
        <div class="logo-position">
          <img src="./images/8.svg" alt="" class="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default ErrorPage;

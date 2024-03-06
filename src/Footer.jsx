const Footer = () => {
  let today = new Date();
  return (
    <main>
      <div className="row justify-content-center mt-3 mb-3 footer">
        <div className="col-6 foot-content">
          <h4>team member allocation app - {today.getFullYear()} </h4>
        </div>
      </div>
    </main>
  )
}

export default Footer
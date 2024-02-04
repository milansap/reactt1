/* eslint-disable react/prop-types */
function Properties(props) {
  console.log(props.bio);
  return (
    <div>
      <header className="header">
        <h1 className="title">{props.bio.name}</h1>
        <p className="description">{props.bio.dob} </p>
      </header>
      <section className="tribute">
        <blockquote>{props.bio.motive}</blockquote>
        <img src={props.bio.image} />
      </section>

      <section className="bio">
        <h2>{props.bio.Bio}</h2>
        <p>{props.bio.desc}</p>
        <hr />
      </section>
    </div>
  );
}

export default Properties;

import '../styles/card.css';

function Card({ title, description, siteLink, sourceLink, techStack, image }) {
  return (
    <div className="cards">
      {image && (
        <div className="card-image-wrapper">
          <img
            src={image}
            alt={title}
            className="card-image"
          />
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-para">{description}</p>

        {techStack && (
          <div className="card-tech">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  className="tech-logo"
                />
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="card-button-container">
          <button className="button" onClick={() => window.open(siteLink, "_blank")}>
            View Site
          </button>
          <button className="button" onClick={() => window.open(sourceLink, "_blank")}>
            View Source
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
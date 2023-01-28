import './Section5.scss';

function Section5() {
  const handleClick = (e) => {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach((header) => {
      if (header !== e.currentTarget) {
        header.classList.remove("active");
        const content = header.nextElementSibling;
        content.classList.remove("open");
      }
    });

    e.currentTarget.classList.toggle("active");
    const content = e.currentTarget.nextElementSibling;
    content.classList.toggle("open");
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>Header 1</div>
      <div className="accordion-content">
        Content 1
      </div>
      <div className="accordion-header" onClick={handleClick}>Header 2</div>
      <div className="accordion-content">
        Content 2
      </div>
    </div>
  );
}

export default Section5;

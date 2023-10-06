function Footer() {
  const date = new Date();
  return (
    <footer className="bg-green-300 text-center">
      <h3>Thank you for scrolling.</h3>
      <p>© {date.getFullYear()} - All right reserved.</p>
    </footer>
  );
}

export default Footer;

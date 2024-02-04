function Newtest() {
  return (
    <>
      <div className="neww">
        <div>
          <h1>Typical Nepali Food Menus</h1>
          <ul>
            <b>Appetizers</b>
            <li>chatamari</li>
            <li>Gundruk</li>
            <li>Sukuti</li>
            <li>
              <ul>
                Momo
                <li>Buff Momo</li>
                <li>Chicken Momo</li>
                <li>Vegg Momo</li>
              </ul>
            </li>
            <b>Main Courses</b>
            <li>
              <ul>
                Dhai Bhat
                <li>Chicken Dhai Bhat</li>
                <li>Vegg Dhai Bhat</li>
              </ul>
            </li>
            <li>Dhido</li>
            <b>Beverages</b>
            <li>chai</li>
            <li>Butter tea</li>
            <li>
              <ul>
                Lassi
                <li>Mango Lassi</li>
                <li>Banana Lassi</li>
                <li>Chocolate Lassi</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Test />
      <Milan />
    </>
  );
}
function Milan() {
  return (
    <>
      milan Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      blanditiis aspernatur omnis nostrum ullam assumenda error aliquam quaerat
      culpa, id officiis quisquam ut libero quis eveniet eligendi temporibus
      voluptas. Similique modi doloribus voluptatum ipsa saepe iusto fugit eius
      vero vel, facilis corporis? Facilis libero fuga est cupiditate, totam
      omnis suscipit!
    </>
  );
}

function Test() {
  return (
    <>
      <div className="form">
        <h1>Please Fill The Form</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <br />
        <br />
        <label htmlFor="sex">Sex:</label>
        <input type="radio" name="sex" id="male" value="male" />
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" id="female" value="female" />
        <label htmlFor="female">Female</label> <br />
        <br />
        <label htmlFor="country">Country: </label>
        <select name="country" id="country">
          <option>Select an option</option>
          <option value="nepal">Nepal</option>
          <option value="usa">USA</option>
          <option value="australia">Australia</option>
        </select>
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea name="message" id="message" cols="30" rows="4"></textarea>
        <br />
        <br />
        <input type="checkbox" name="newsletter" id="newsletter" />
        <label htmlFor="newsletter">Subscribe?</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    </>
  );
}

export default Newtest;

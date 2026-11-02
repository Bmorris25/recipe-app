
import './App.css'

function App() {

  return (
    <>
      <section className="week-schedule">
        <h1>Weekly Meal Plan</h1>
        <form>
          <label htmlFor="Monday">Monday</label>
          <select id="Monday" name="Monday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Tuesday">Tuesday</label>
          <select id="Tuesday" name="Tuesday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Wednesday">Wednesday</label>
          <select id="Wednesday" name="Wednesday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Thursday">Thursday</label>
          <select id="Thursday" name="Thursday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Friday">Friday</label>
          <select id="Friday" name="Friday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Saturday">Saturday</label>
          <select id="Saturday" name="Saturday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <label htmlFor="Sunday">Sunday</label>
          <select id="Sunday" name="Sunday">
            <option value="">Select a meal</option>
            <option value="Oatmeal">Oatmeal</option>
            <option value="Eggs">Eggs</option>
            <option value="Smoothie">Smoothie</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  )
}

export default App

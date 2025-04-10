# Digital-Analog Clock 🕒

![Clock Preview](https://github.com/rj9884/digital-analog-clock/blob/main/assets/Ui.png)

A modern and responsive **Digital-Analog Clock** combining functionality with elegant design. This project showcases real-time updates, accurate timekeeping, and a stunning interface.

## ✨ Features
- **Dual Clock Display**:
  - **Analog Clock**: Dynamic hour, minute, and second hands.
  - **Digital Clock**: Accurate time display with hours, minutes, and seconds.
- **Date Display**: Shows current day, date, month, and year dynamically.
- **Responsive Design**: Optimized for smartphones, tablets, and larger screens.
- **Customizable Appearance**: Modern styling with visually appealing gradients and shadows.

## 🚀 Technologies Used
- **HTML**: Structure and layout of the clock.
- **CSS**: Styling, animations, and media queries for responsiveness.
- **JavaScript**: Real-time functionality for clock hands, digital clock, and date display.

## 📸 Demo
![Clock Demo](https://github.com/rj9884/digital-analog-clock/blob/main/assets/gif.mp4)

## ⚙️ How It Works
1. **Analog Clock**:
   - Dynamic rotation of hour, minute, and second hands based on the current time.
   - Smooth animations with `transform-origin` and CSS gradients.
2. **Digital Clock**:
   - Displays formatted time with leading zeros for single digits.
   - Updates every second to ensure accuracy.
3. **Date Formatter**:
   - Outputs a localized date string using `toLocaleDateString()`.

## 🎨 Design Highlights
- **Analog Clock**:
  - Minimalist design with glowing effects for clock hands and center dot.
  - Stylish radial gradient background.
- **Digital Clock**:
  - Bold, easy-to-read digits with blinking colon separators.
  - Displays a formatted date in a user-friendly style.
- **Responsive**:
  - Media queries optimize layout for different screen sizes.

## 🛠️ Customization
Want to tweak the design or functionality? Here’s how:
- Update gradients, fonts, or animations in `clock.css`.
- Add or modify features, like alternate time zones, in `clock.js`.

## 📂 Project Structure
```
project/
├── index.html       # Main HTML file
├── clock.css        # Styling and responsiveness
├── clock.js         # Clock logic and dynamic updates
├── assets/          # Images/additional media
```

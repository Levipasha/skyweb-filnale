// PASTE THIS INTO BROWSER CONSOLE (F12 → Console) TO VERIFY CSS
// This will tell you EXACTLY what's happening with your CSS

console.clear();
console.log('%c🔍 CSS VERIFICATION TEST', 'font-size: 20px; color: #2563eb; font-weight: bold');
console.log('━'.repeat(50));

// Check if About page is loaded
const aboutPage = document.querySelector('.about-page');
if (!aboutPage) {
  console.log('%c❌ ERROR: Not on About page!', 'color: red; font-size: 16px');
  console.log('Navigate to: localhost:3000/about');
} else {
  console.log('%c✅ About page detected', 'color: green');
}

// Check Mission card
const missionCard = document.querySelector('.mv-card-blue');
if (missionCard) {
  const styles = getComputedStyle(missionCard);
  console.log('\n%c📘 MISSION CARD:', 'font-size: 16px; font-weight: bold');
  console.log('Background:', styles.background);
  console.log('Border-left:', styles.borderLeft);
  console.log('Border-left-color:', styles.borderLeftColor);
  console.log('Border-left-width:', styles.borderLeftWidth);
  
  const isWhite = styles.background.includes('white') || 
                  styles.background.includes('255, 255, 255') ||
                  styles.background === 'rgb(255, 255, 255)';
  const hasBlueBoorder = styles.borderLeftColor === 'rgb(59, 130, 246)';
  const hasBorder = styles.borderLeftWidth === '5px';
  
  if (isWhite && hasBlueBoorder && hasBorder) {
    console.log('%c✅ MISSION CARD IS CORRECT!', 'color: green; font-weight: bold; font-size: 14px');
  } else {
    console.log('%c❌ MISSION CARD STILL USING OLD CSS', 'color: red; font-weight: bold; font-size: 14px');
    console.log('Expected: white background with 5px blue left border');
  }
} else {
  console.log('%c⚠️  Mission card not found', 'color: orange');
}

// Check Vision card
const visionCard = document.querySelector('.mv-card-green');
if (visionCard) {
  const styles = getComputedStyle(visionCard);
  console.log('\n%c📗 VISION CARD:', 'font-size: 16px; font-weight: bold');
  console.log('Background:', styles.background);
  console.log('Border-left:', styles.borderLeft);
  console.log('Border-left-color:', styles.borderLeftColor);
  console.log('Border-left-width:', styles.borderLeftWidth);
  
  const isWhite = styles.background.includes('white') || 
                  styles.background.includes('255, 255, 255') ||
                  styles.background === 'rgb(255, 255, 255)';
  const hasGreenBorder = styles.borderLeftColor === 'rgb(16, 185, 129)';
  const hasBorder = styles.borderLeftWidth === '5px';
  
  if (isWhite && hasGreenBorder && hasBorder) {
    console.log('%c✅ VISION CARD IS CORRECT!', 'color: green; font-weight: bold; font-size: 14px');
  } else {
    console.log('%c❌ VISION CARD STILL USING OLD CSS', 'color: red; font-weight: bold; font-size: 14px');
    console.log('Expected: white background with 5px green left border');
  }
} else {
  console.log('%c⚠️  Vision card not found', 'color: orange');
}

// Check Tagline card
const taglineCard = document.querySelector('.mv-card-purple');
if (taglineCard) {
  const styles = getComputedStyle(taglineCard);
  console.log('\n%c📙 TAGLINE CARD:', 'font-size: 16px; font-weight: bold');
  console.log('Background:', styles.background);
  
  const hasPurpleGradient = styles.background.includes('124') || 
                            styles.background.includes('139') ||
                            styles.background.includes('gradient');
  
  if (hasPurpleGradient) {
    console.log('%c✅ TAGLINE CARD IS CORRECT!', 'color: green; font-weight: bold; font-size: 14px');
  } else {
    console.log('%c❌ TAGLINE CARD STILL USING OLD CSS', 'color: red; font-weight: bold; font-size: 14px');
    console.log('Expected: purple gradient background');
  }
} else {
  console.log('%c⚠️  Tagline card not found', 'color: orange');
}

// Check container layout
const container = document.querySelector('.mv-cards-container');
if (container) {
  const styles = getComputedStyle(container);
  console.log('\n%c📦 CONTAINER LAYOUT:', 'font-size: 16px; font-weight: bold');
  console.log('Display:', styles.display);
  console.log('Flex-direction:', styles.flexDirection);
  console.log('Max-width:', styles.maxWidth);
  
  const isCorrect = styles.display === 'flex' && 
                    styles.flexDirection === 'column' &&
                    styles.maxWidth === '900px';
  
  if (isCorrect) {
    console.log('%c✅ LAYOUT IS CORRECT (Vertical stack)!', 'color: green; font-weight: bold; font-size: 14px');
  } else {
    console.log('%c❌ LAYOUT STILL USING OLD CSS (Grid)!', 'color: red; font-weight: bold; font-size: 14px');
    console.log('Expected: flex column with 900px max-width');
  }
} else {
  console.log('%c⚠️  Container not found', 'color: orange');
}

// Final verdict
console.log('\n' + '━'.repeat(50));
console.log('%c🎯 FINAL VERDICT:', 'font-size: 18px; font-weight: bold; color: #2563eb');

const allCards = document.querySelectorAll('.mv-card');
if (allCards.length === 3) {
  const mission = getComputedStyle(document.querySelector('.mv-card-blue'));
  const vision = getComputedStyle(document.querySelector('.mv-card-green'));
  
  const missionWhite = mission.background.includes('white') || mission.background.includes('255, 255, 255');
  const visionWhite = vision.background.includes('white') || vision.background.includes('255, 255, 255');
  
  if (missionWhite && visionWhite) {
    console.log('%c✅ NEW CSS IS WORKING!', 'color: green; font-size: 20px; font-weight: bold');
    console.log('%cYou should see white cards with colored left borders', 'color: green; font-size: 14px');
  } else {
    console.log('%c❌ OLD CSS IS STILL CACHED!', 'color: red; font-size: 20px; font-weight: bold');
    console.log('%c📋 SOLUTIONS:', 'color: orange; font-size: 16px; font-weight: bold');
    console.log('1. Press Ctrl+Shift+Delete → Clear cached images and files');
    console.log('2. Press Ctrl+Shift+R to hard refresh');
    console.log('3. OR open Incognito mode (Ctrl+Shift+N) → go to localhost:3000/about');
  }
} else {
  console.log('%c⚠️  Could not find all 3 cards', 'color: orange; font-size: 16px');
}

console.log('\n' + '━'.repeat(50));


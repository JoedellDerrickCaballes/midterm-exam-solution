function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000); 
  }
  
  // ipasa ang argument padung sa parameter name
  delayedGreeting("Alice");
  
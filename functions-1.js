// program to pass a function as a parameter

function greeting() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

name('John', greeting);
name('Jack', greeting);
name('Sara', greeting);
export const moveIn = {
    visible: { 
        opacity: 1, 
        scale: 1.1, 
        y: -100, 
        x: 200 
    },
    hidden: {
      opacity: -0.5,
      scale: 0.65,
      y: -100,
      x: 200
    }
};

export const back = {
    show: { 
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 1.75,
        }
    },
    hidden: {
      //opacity: 0.8,
      y: -50,
    }
};

export const dog = {
    show: { 
        y: 0, 
        transition: {
            duration: 1.5,
        }
    },
    hidden: {
      y: 150,
    }
};

export const lights = {
    show: { 
        y: 0, 
        transition: {
            duration: 1.5,
        }
    },
    hidden: {
      y: -150,
    }
};

export const text = {
    show: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
        }
    },
    hidden: {
        x: -50,
        opacity: 0,
    }
};
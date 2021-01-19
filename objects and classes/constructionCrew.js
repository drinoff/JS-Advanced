function solve(input){

    if(input.dizziness){
        input.levelOfHydrated +=input.experience*input.weight*0.1;
        input.dizziness = false;
    }
    return input;

}
solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
)
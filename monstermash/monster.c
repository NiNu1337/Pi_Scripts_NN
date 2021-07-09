#include "monster.h"

int count_monsters(monster *theMonsters,int len){

    return len;

}

int count_undead_monsters(monster *theMonsters, int len){

    int count = 0;
    for(int i = 0; i < len; i++){

        monster theMonster = *(theMonsters+i);
        if(theMonster.undead){
            count++;
        }

    }
    return count;


}

float average_spookiness(monster *theMonsters, int len){

    if(len == 0){
        return 0.0;
    }
    else{

        int total = 0;
        for(int i = 0; i < len; i++){

            monster theMonster = *(theMonsters+i);
            total += theMonster.spookyiness;

        }
        return total;

    }


}

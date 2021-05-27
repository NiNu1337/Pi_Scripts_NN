#include "checkers.h"

#define RED 0xF800
#define BLUE 0x1F
#define BLACK 0x0000
#define YELLOW 0xFFE0
#define ORANGE 0xFBE0
#define BROWN 0x79E0
#define GREEN 0x7E0
#define CYAN 0x7FF

pi_joystick_t *joystick = NULL;

int delay = 100;

int xCoord;

int yCoord;

int prevX;

int prevY;

int turn;

int chooseMove = 0;

int prevColor = 0;

checkersPiece *playerCURR;

checkersPiece *computerCURR;

checkersPiece *nextPiece;

void coinFlip(){
    time_t t;
    srand((unsigned)time(&t));
    int flipNum = rand();
    if(flipNum % 2 == 0){
        turn = 1; // Opponent's turn
    }
    else{
        turn = 0; // Player's turn
    }
    if(turn == 1){
        computerCURR = getComputerTeam();
        currCursor(computerCURR);
    }
    else{
        playerCURR = getPlayerTeam();
        currCursor(playerCURR);

    }
}


checkersPiece *getPlayerCURR(){
    return playerCURR;
}

checkersPiece *getComputerCURR(){
    return computerCURR;
}


void handler(unsigned int code){
   
    switch(code){
        case KEY_UP:
            fprintf(stderr,"Pressed up\n");
            if(chooseMove && xCoord >= 0){
                if(xCoord == 0){
                    xCoord = 7;
                }
                else{
                    xCoord--;
                }


                if(prevColor == 31){
                    displayChooseMove(prevX,prevY,'b');
                }
                else if(prevColor == 63488){
                    displayChooseMove(prevX,prevY,'r');
                }
                else{
                    displayChooseMove(prevX,prevY,'z');
                }

                int currColor = getColorVal(xCoord,yCoord); 
                
                fprintf(stderr,"\nThe current color of the pixel you are moving to is : %d",currColor);
                if(currColor == 0){
                    displayChooseMove(xCoord,yCoord,'g');
                }
                else if(currColor == 31){
                    displayChooseMove(xCoord,yCoord,'b');
                }
                else if(currColor == 63488){
                    displayChooseMove(xCoord,yCoord,'r');
                }
                prevColor = currColor;
                prevY = yCoord;
                prevX = xCoord;
                fprintf(stderr,"\nEntered keyup choosemove if\n");
            }
            else if(turn == 0){ // computer's turn
                if(playerCURR->next != NULL){
                    playerCURR = playerCURR->next;
                }
                else{
                    playerCURR = getPlayerTeam();
                }
            }
            else{
                if(computerCURR->next != NULL){
                    computerCURR = computerCURR->next;
                }
                else{
                    computerCURR = getComputerTeam();
                }
            }
            break;
        case KEY_DOWN:
            fprintf(stderr,"Pressed down\n");
            if(chooseMove && xCoord <= 7){
                if(xCoord == 7){
                    xCoord = 0;
                }
                else{
                    xCoord++;
                }
                if(prevColor == 31){
                    displayChooseMove(prevX,prevY,'b');
                }
                else if(prevColor == 63488){
                    displayChooseMove(prevX,prevY,'r');
                }
                else{
                    displayChooseMove(prevX,prevY,'z');
                }

                int currColor = getColorVal(xCoord,yCoord);

                if(currColor == 0){
                    displayChooseMove(xCoord,yCoord,'g');
                }
                else if(currColor == 31){
                    displayChooseMove(xCoord,yCoord,'b');
                }
                else if(currColor == 63488){
                    displayChooseMove(xCoord,yCoord,'r');
                }
                prevColor = currColor;
                prevY = yCoord;
                prevX = xCoord;
                fprintf(stderr,"\nEntered keydown choosemove if");
            }
            else if(turn == 0){
                if(playerCURR->next != NULL){
                    playerCURR = playerCURR->next;
                }
                else{
                    playerCURR = getPlayerTeam();
                }
            }
            else{
                if(computerCURR->next != NULL){
                    computerCURR = computerCURR->next;
                }
                else{
                    computerCURR = getComputerTeam();
                }
            }
            break;
        case KEY_LEFT:
            fprintf(stderr,"Pressed left\n");
            if(chooseMove && yCoord >= 0){
                if(yCoord == 0){
                    yCoord = 7;
                }
                else{
                    yCoord--;
                }
                if(prevColor == 31){
                    displayChooseMove(prevX,prevY,'b');
                }
                else if(prevColor == 63488){
                    displayChooseMove(prevX,prevY,'r');
                }
                else{
                    displayChooseMove(prevX,prevY,'z');
                }

                int currColor = getColorVal(xCoord,yCoord);

                if(currColor == 0){
                    displayChooseMove(xCoord,yCoord,'g');
                }
                else if(currColor == 31){
                    displayChooseMove(xCoord,yCoord,'b');
                }
                else{
                    displayChooseMove(xCoord,yCoord,'r');
                }
                prevColor = currColor;
                prevY = yCoord;
                prevX = xCoord;
                fprintf(stderr,"\nEntered keyleft choosemove if\n");
            }
            else if(turn == 0){
                if(playerCURR->next != NULL){
                    playerCURR = playerCURR->next;
                }
                else{
                    playerCURR = getPlayerTeam();
                }
            }
            else{
                if(computerCURR->next != NULL){
                    computerCURR = computerCURR->next;
                }
                else{
                    computerCURR = getComputerTeam();
                }
            }
            break;
        case KEY_RIGHT:
            fprintf(stderr,"Pressed right\n");
            if(chooseMove && yCoord <= 7){
                printf("\nEntering keyright choosemove if");
                if(yCoord == 7){
                    yCoord = 0;
                }
                else{
                    yCoord++;
                }
                if(prevColor == 31){
                    displayChooseMove(prevX,prevY,'b');
                }
                else if(prevColor == 63488){
                    displayChooseMove(prevX,prevY,'r');
                }
                else{
                    displayChooseMove(prevX,prevY,'z');
                }

                int currColor = getColorVal(xCoord,yCoord);

                if(currColor == 0){
                    displayChooseMove(xCoord,yCoord,'g');
                }
                else if(currColor == 31){
                    displayChooseMove(xCoord,yCoord,'b');
                }
                else{
                    displayChooseMove(xCoord,yCoord,'r');
                }
                prevColor = currColor;
                prevY = yCoord;
                prevX = xCoord;
                fprintf(stderr,"\nReached end of keyright choosemove if\n");
            }
            else if(turn == 0){
                if(playerCURR->next != NULL){
                    playerCURR = playerCURR->next;
                }
                else{
                    playerCURR = getPlayerTeam();
                }
            }
            else{
                if(computerCURR->next != NULL){
                    computerCURR = computerCURR->next;
                }
                else{
                    computerCURR = getComputerTeam();
                }
            }
            break;
        case KEY_ENTER:
            fprintf(stderr,"Pressed Enter\n");
            if(turn == 0){
                chooseMove = 1;
                xCoord = playerCURR->xCoord;
                yCoord = playerCURR->yCoord;
                prevX = xCoord;
                prevY = yCoord;
            }
            else{
                fprintf(stderr,"\nEntered key_enter computer turn");
                chooseMove = 1;
                xCoord = computerCURR->xCoord;
                yCoord = computerCURR->yCoord;
                prevX = xCoord;
                prevY = yCoord;
                fprintf(stderr,"computerCURRX = %d\ncomputerCURRY = %d\nxCoord = %d\nyCoord = %d\n",computerCURR->xCoord,computerCURR->yCoord,xCoord,yCoord);
            }
            break;
    }

}

/*
 *
 *computer choosing attack : make binary search tree and collect points for each move, (take one or two enemy pieces --> 4 points example), then make the computer traverse the tree, and the best node, execute the move
 *
 */

checkersPiece *findNextPiece(checkersPiece *currPiece, char direction){
    checkersPiece *nextPiece;
    double dist;
    if(turn == 1){
        checkersPiece *tempHead = computerCURR;
        switch(direction){
        
            case 'u':
                while(tempHead != NULL){
                    if(tempHead != currPiece && fabs(currPiece->yCoord - tempHead->yCoord) <= 1){
                        return nextPiece;
                    }  
                }
        
        }
    }
}

int validMove(checkersPiece *currPiece,int xCoord, int yCoord){

    pi_framebuffer_t *fb = getDisplay();
   
    sense_fb_bitmap_t *bm = fb->bitmap;  

    if(currPiece->xCoord == 7 && xCoord == 8){
        return 0;
    }
    else if(currPiece->yCoord == 7 && yCoord == 8){
        return 0;
    }
    else{
        if(turn == 0){
            if(bm->pixel[xCoord][yCoord] == RED){
                return 0;
            }
            else{
                // just update move, add functionality if opposing player is in space
                bm->pixel[xCoord][yCoord] = RED;
                bm->pixel[currPiece->xCoord][currPiece->yCoord] = BLACK;
                turn = 1;
                currPiece->xCoord = xCoord;
                currPiece->yCoord = yCoord;
            }
        }
        else{
            if(bm->pixel[xCoord][yCoord] == BLUE){
                return 0;
            }
            else{
                bm->pixel[xCoord][yCoord] = BLUE;
                bm->pixel[currPiece->xCoord][currPiece->yCoord] = BLACK;
                turn = 0;
                currPiece->xCoord = xCoord;
                currPiece->yCoord = yCoord;
            }
        }
    }

}


int getChooseMove(){
    return chooseMove;
}




void openJoystick(void){
    if(joystick == NULL){
        joystick = getJoystickDevice();
    }
}

void closeJoystick(void){
    if(joystick){
        freeJoystick(joystick);
        joystick = NULL;
    }
}


void checkJoystick(void){
    if(turn == 0){
        fprintf(stderr,"\nPlayer's turn\n");
    }
    if(turn == 1){
        fprintf(stderr,"\nComputer's turn\n");
    }
    pollJoystick(joystick,handler,delay);
}

void setDelay(int newDelay){
    delay = newDelay;
}

int getTurn(){
    return turn;
}

int getXCoord(){
    return xCoord;
}

int getYCoord(){
    return yCoord;
}

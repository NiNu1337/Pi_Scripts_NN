#include "Matrix.hpp"

Matrix::Matrix(){

    board = new int**[];
    size1 = 4;
    size2 = 4;
    size3 = 4;

}

Matrix::Matrix(int newSize1, int newSize2, int newSize3){

    this->size1 = newSize1;
    this->size2 = newSize2;
    this->size3 = newSize3;

    board = new int**[];

}

Matrix::~Matrix(){

    for(int i = 0; i < size1; i++){
        for(int j = 0; j < size2; j++){
            delete []*(*(board+i)+j);
        }
        delete []*(board+i);
    }

}

int Matrix::sumMatrix(){

    int sum = 0;
    for(int i = 0; i < size1; i++){
        for(int j = 0; j < size2; j++){
            for(int k = 0; k < size3; k++){
                sum += *(*(*(board+i)+j)+k);
            }
        }
    }
    return sum;

}

int Matrix::avgMatrix(){

    int totalNumbers = size1 * size2 * size3;
    int theSum = sumMatrix();
    return (theSum*1.0) / totalNumbers;

}

int Matrix::subMatrix(){

    int sum = 0;
    for(int i = 0; i < size1; i++){
        for(int j = 0; j < size2; j++){
            for(int k = 0; k < size3; k++){
                sum -= *(*(*(board+i)+j)+k);
            }
        }
    }
    return sum;

}

int Matrix::evenCount(){

    int count = 0;
    for(int i = 0; i < size1; i++){
        for(int j = 0; j < size2; j++){
            for(int k = 0; k < size3; k++){
                int value = *(*(*(board+i)+j)+k);
                if(value % 2 == 0){
                    count++;
                }
            }
        }
    }
    return count;

}


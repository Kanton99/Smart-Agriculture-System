#include <stdio.h>
#include <shell.h>

static int hello(int argc, char **argv){
    if(argc) printf("Hello, %s\n",argv[0]);
    return 0;
}

static const shell_command_t shell_commands[]={
    {"hello","Says Hello, <input>",hello},
    {NULL,NULL,NULL}
};
int main(void){

    /*start shell*/
    char line_buf[SHELL_DEFAULT_BUFSIZE];
    shell_run(shell_commands,line_buf,SHELL_DEFAULT_BUFSIZE);
    return 0;
}
var size = 8;
undefined
var line = "";

undefined
for (var a = 0; a <= size; a++) {
    for (var b = 0; b <= size; b++) {
        if ((a + b ) % 2 == 0) 
            line += " ";
        else 
            line += "#";
    }
    line += "\n";
}
" # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
# # # # #
 # # # # 
"

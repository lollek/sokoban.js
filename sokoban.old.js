/* Created by Olle Kvarnstrom 
 * Date: 2013-10-01 */

/* Maps: */
var gRawMaps = [["xxxx#####"
                ,"xxxx#   #"
                ,"xxxx#o  #"
                ,"xx###  o##"
                ,"xx#  o o #"
                ,"### # ## #xxx######"
                ,"#   # ## #####  ..#"
                ,"# o  o          ..#"
                ,"##### ### #@##  ..#"
                ,"xxxx#     #########"
                ,"xxxx#######"
                ],
                ["############"
                ,"#..  #     ###"
                ,"#..  # o  o  #"
                ,"#..  #o####  #"
                ,"#..    @ ##  #"
                ,"#..  # #  o ##"
                ,"###### ##o o #"
                ,"xx# o  o o o #"
                ,"xx#    #     #"
                ,"xx############"
                ],
                ["xxxxxxxx########"
                ,"xxxxxxxx#     @#"
                ,"xxxxxxxx# o#o ##"
                ,"xxxxxxxx# o  o#"
                ,"xxxxxxxx##o o #"
                ,"######### o # ###"
                ,"#....  ## o  o  #"
                ,"##...    o  o   #"
                ,"#....  ##########"
                ,"########"
                ],
                ["xxxxxxxxxxx########"
                ,"xxxxxxxxxxx#  ....#"
                ,"############  ....#"
                ,"#    #  o o   ....#"
                ,"# ooo#o  o #  ....#"
                ,"#  o     o #  ....#"
                ,"# oo #o o o########"
                ,"#  o #     #"
                ,"## #########"
                ,"#    #    ##"
                ,"#     o   ##"
                ,"#  oo#oo  @#"
                ,"#    #    ##"
                ,"###########"
                ],
                ["xxxxxxxx#####"
                ,"xxxxxxxx#   #####"
                ,"xxxxxxxx# #o##  #"
                ,"xxxxxxxx#     o #"
                ,"######### ###   #"
                ,"#....  ## o  o###"
                ,"#....    o oo ##"
                ,"#....  ##o  o @#"
                ,"#########  o  ##"
                ,"xxxxxxxx# o o  #"
                ,"xxxxxxxx### ## #"
                ,"xxxxxxxxxx#    #"
                ,"xxxxxxxxxx######"
                ],
                ["######xx###"
                ,"#..  #x##@##"
                ,"#..  ###   #"
                ,"#..     oo #"
                ,"#..  # # o #"
                ,"#..### # o #"
                ,"#### o #o  #"
                ,"xxx#  o# o #"
                ,"xxx# o  o  #"
                ,"xxx#  ##   #"
                ,"xxx#########"
                ],
                ["xxxxxxx#####"
                ,"x#######   ##"
                ,"## # @## oo #"
                ,"#    o      #"
                ,"#  o  ###   #"
                ,"### #####o###"
                ,"# o  ### ..#"
                ,"# o o o ...#"
                ,"#    ###...#"
                ,"# oo # #...#"
                ,"#  ### #####"
                ,"####"
                ],
                ["xx####"
                ,"xx#  ###########"
                ,"xx#    o   o o #"
                ,"xx# o# o #  o  #"
                ,"xx#  o o  #    #"
                ,"### o# #  #### #"
                ,"#@#o o o  ##   #"
                ,"#    o #o#   # #"
                ,"#   o    o o o #"
                ,"#####  #########"
                ,"xx#      #"
                ,"xx#      #"
                ,"xx#......#"
                ,"xx#......#"
                ,"xx#......#"
                ,"xx########"
                ],
                ["xxxxxxxxxx#######"
                ,"xxxxxxxxxx#  ...#"
                ,"xxxxxx#####  ...#"
                ,"xxxxxx#      . .#"
                ,"xxxxxx#  ##  ...#"
                ,"xxxxxx## ##  ...#"
                ,"xxxxx### ########"
                ,"xxxxx# ooo ##"
                ,"x#####  o o #####"
                ,"##   #o o   #   #"
                ,"#@ o  o    o  o #"
                ,"###### oo o #####"
                ,"xxxxx#      #"
                ,"xxxxx########"
                ],
                [" ###  #############"
                ,"##@####       #   #"
                ,"# oo   oo  o o ...#"
                ,"#  ooo#    o  #...#"
                ,"# o   # oo oo #...#"
                ,"###   #  o    #...#"
                ,"#     # o o o #...#"
                ,"#    ###### ###...#"
                ,"## #  #  o o  #...#"
                ,"#  ## # oo o o##..#"
                ,"# ..# #  o      #.#"
                ,"# ..# # ooo ooo #.#"
                ,"##### #       # #.#"
                ,"    # ######### #.#"
                ,"    #           #.#"
                ,"    ###############"
                ],
                ["          ####"
                ,"     #### #  #"
                ,"   ### @###o #"
                ,"  ##      o  #"
                ," ##  o oo## ##"
                ," #  #o##     #"
                ," # # o oo # ###"
                ," #   o #  # o #####"
                ,"####    #  oo #   #"
                ,"#### ## o         #"
                ,"#.    ###  ########"
                ,"#.. ..# ####"
                ,"#...#.#"
                ,"#.....#"
                ,"#######"
                ],
                ["################"
                ,"#              #"
                ,"# # ######     #"
                ,"# #  o o o o#  #"
                ,"# #   o@o   ## ##"
                ,"# #  o o o###...#"
                ,"# #   o o  ##...#"
                ,"# ###ooo o ##...#"
                ,"#     # ## ##...#"
                ,"#####   ## ##...#"
                ,"    #####     ###"
                ,"        #     #"
                ,"        #######"
                ],
                ["   #########"
                ,"  ##   ##  #####"
                ,"###     #  #    ###"
                ,"#  o #o #  #  ... #"
                ,"# # o#@o## # #.#. #"
                ,"#  # #o  #    . . #"
                ,"# o    o # # #.#. #"
                ,"#   ##  ##o o . . #"
                ,"# o #   #  #o#.#. #"
                ,"## o  o   o  o... #"
                ," #o ######    ##  #"
                ," #  #    ##########"
                ," ####"
                ],
                ["       #######"
                ," #######     #"
                ," #     # o@o #"
                ," #oo #   #########"
                ," # ###......##   #"
                ," #   o......## # #"
                ," # ###......     #"
                ,"##   #### ### #o##"
                ,"#  #o   #  o  # #"
                ,"#  o ooo  # o## #"
                ,"#   o o ###oo # #"
                ,"#####     o   # #"
                ,"    ### ###   # #"
                ,"      #     #   #"
                ,"      ########  #"
                ,"             ####"
                ],
                ["   ########"
                ,"   #   #  #"
                ,"   #  o   #"
                ," ### #o   ####"
                ," #  o  ##o   #"
                ," #  # @ o # o#"
                ," #  #      o ####"
                ," ## ####o##     #"
                ," # o#.....# #   #"
                ," #  o..**. o# ###"
                ,"##  #.....#   #"
                ,"#   ### #######"
                ,"# oo  #  #"
                ,"#  #     #"
                ,"######   #"
                ,"     #####"
                ],
                ["#####"
                ,"#   ##"
                ,"#    #  ####"
                ,"# o  ####  #"
                ,"#  oo o   o#"
                ,"###@ #o    ##"
                ," #  ##  o o ##"
                ," # o  ## ## .#"
                ," #  #o##o  #.#"
                ," ###   o..##.#"
                ,"  #    #.*...#"
                ,"  # oo #.....#"
                ,"  #  #########"
                ,"  #  #"
                ,"  ####"
                ],
                ["   ##########"
                ,"   #..  #   #"
                ,"   #..      #"
                ,"   #..  #  ####"
                ,"  #######  #  ##"
                ,"  #            #"
                ,"  #  #  ##  #  #"
                ,"#### ##  #### ##"
                ,"#  o  ##### #  #"
                ,"# # o  o  # o  #"
                ,"# @o  o   #   ##"
                ,"#### ## #######"
                ,"   #    #"
                ,"   ######"
                ],
                ["     ###########"
                ,"     #  .  #   #"
                ,"     # #.    @ #"
                ," ##### ##..# ####"
                ,"##  # ..###     ###"
                ,"# o #...   o #  o #"
                ,"#    .. ##  ## ## #"
                ,"####o##o# o #   # #"
                ,"  ## #    #o oo # #"
                ,"  #  o # #  # o## #"
                ,"  #               #"
                ,"  #  ###########  #"
                ,"  ####         ####"
                ],
                ["  ######"
                ,"  #   @####"
                ,"##### o   #"
                ,"#   ##    ####"
                ,"# o #  ##    #"
                ,"# o #  ##### #"
                ,"## o  o    # #"
                ,"## o o ### # #"
                ,"## #  o  # # #"
                ,"## # #o#   # #"
                ,"## ###   # # ######"
                ,"#  o  #### # #....#"
                ,"#    o    o   ..#.#"
                ,"####o  o# o   ....#"
                ,"#       #  ## ....#"
                ,"###################"
                ],
                ["    ##########"
                ,"#####        ####"
                ,"#     #   o  #@ #"
                ,"# #######o####  ###"
                ,"# #    ## #  #o ..#"
                ,"# # o     #  #  #.#"
                ,"# # o  #     #o ..#"
                ,"# #  ### ##     #.#"
                ,"# ###  #  #  #o ..#"
                ,"# #    #  ####  #.#"
                ,"# #o   o  o  #o ..#"
                ,"#    o # o o #  #.#"
                ,"#### o###    #o ..#"
                ,"   #    oo ###....#"
                ,"   #      ## ######"
                ,"   ########"
                ],
                ["#########"
                ,"#       #"
                ,"#       ####"
                ,"## #### #  #"
                ,"## #@##    #"
                ,"# ooo o  oo#"
                ,"#  # ## o  #"
                ,"#  # ##  o ####"
                ,"####  ooo o#  #"
                ," #   ##   ....#"
                ," # #   # #.. .#"
                ," #   # # ##...#"
                ," ##### o  #...#"
                ,"     ##   #####"
                ,"      #####"
                ],
                ["######     ####"
                ,"#    #######  #####"
                ,"#   o#  #  o  #   #"
                ,"#  o  o  o # o o  #"
                ,"##o o   # @# o    #"
                ,"#  o ########### ##"
                ,"# #   #.......# o#"
                ,"# ##  # ......#  #"
                ,"# #   o........o #"
                ,"# # o #.... ..#  #"
                ,"#  o o####o#### o#"
                ,"# o   ### o   o  ##"
                ,"# o     o o  o    #"
                ,"## ###### o ##### #"
                ,"#         #       #"
                ,"###################"
                ],
                ["    #######"
                ,"    #  #  ####"
                ,"##### o#o #  ##"
                ,"#.. #  #  #   #"
                ,"#.. # o#o #  o####"
                ,"#.  #     #o  #  #"
                ,"#..   o#  # o    #"
                ,"#..@#  #o #o  #  #"
                ,"#.. # o#     o#  #"
                ,"#.. #  #oo#o  #  ##"
                ,"#.. # o#  #  o#o  #"
                ,"#.. #  #  #   #   #"
                ,"##. ####  #####   #"
                ," ####  ####   #####"
                ],
                ["###############"
                ,"#..........  .####"
                ,"#..........oo.#  #"
                ,"###########o #   ##"
                ,"#      o  o     o #"
                ,"## ####   #  o #  #"
                ,"#      #   ##  # ##"
                ,"#  o#  # ##  ### ##"
                ,"# o #o###    ### ##"
                ,"###  o #  #  ### ##"
                ,"###    o ## #  # ##"
                ," # o  #  o  o o   #"
                ," #  o  o#ooo  #   #"
                ," #  #  o      #####"
                ," # @##  #  #  #"
                ," ##############"
                ],
                ["####"
                ,"#  ##############"
                ,"#  #   ..#......#"
                ,"#  # # ##### ...#"
                ,"##o#    ........#"
                ,"#   ##o######  ####"
                ,"# o #     ######@ #"
                ,"##o # o   ######  #"
                ,"#  o #ooo##       #"
                ,"#      #    #o#o###"
                ,"# #### #ooooo    #"
                ,"# #    o     #   #"
                ,"# #   ##        ###"
                ,"# ######o###### o #"
                ,"#        #    #   #"
                ,"##########    #####"
                ],
                [" #######"
                ," #  #  #####"
                ,"##  #  #...###"
                ,"#  o#  #...  #"
                ,"# o #oo ...  #"
                ,"#  o#  #... .#"
                ,"#   # o########"
                ,"##o       o o #"
                ,"##  #  oo #   #"
                ," ######  ##oo@#"
                ,"      #      ##"
                ,"      ########"
                ],
                [" #################"
                ," #...   #    #   ##"
                ,"##.....  o## # #o #"
                ,"#......#  o  #    #"
                ,"#......#  #  # #  #"
                ,"######### o  o o  #"
                ,"  #     #o##o ##o##"
                ," ##   o    # o    #"
                ," #  ## ### #  ##o #"
                ," # o oo     o  o  #"
                ," # o    o##o ######"
                ," #######  @ ##"
                ,"       ######"
                ],
                ["         #####"
                ,"     #####   #"
                ,"    ## o  o  ####"
                ,"##### o  o o ##.#"
                ,"#       oo  ##..#"
                ,"#  ###### ###.. #"
                ,"## #  #    #... #"
                ,"# o   #    #... #"
                ,"#@ #o ## ####...#"
                ,"####  o oo  ##..#"
                ,"   ##  o o  o...#"
                ,"    # oo  o #  .#"
                ,"    #   o o  ####"
                ,"    ######   #"
                ,"         #####"
                ],
                ["#####"
                ,"#   ##"
                ,"# o  #########"
                ,"## # #       ######"
                ,"## #   o#o#@  #   #"
                ,"#  #      o #   o #"
                ,"#  ### ######### ##"
                ,"#  ## ..*..... # ##"
                ,"## ## *.*..*.* # ##"
                ,"# o########## ##o #"
                ,"#  o   o  o    o  #"
                ,"#  #   #   #   #  #"
                ,"###################"
                ],
                ["       ###########"
                ,"       #   #     #"
                ,"#####  #     o o #"
                ,"#   ##### o## # ##"
                ,"# o ##   # ## o  #"
                ,"# o  @oo # ##ooo #"
                ,"## ###   # ##    #"
                ,"## #   ### #####o#"
                ,"## #     o  #....#"
                ,"#  ### ## o #....##"
                ,"# o   o #   #..o. #"
                ,"#  ## o #  ##.... #"
                ,"#####   ######...##"
                ,"    #####    #####"
                ],
                ["  ####"
                ,"  #  #########"
                ," ##  ##  #   #"
                ," #  o# o@o   ####"
                ," #o  o  # o o#  ##"
                ,"##  o## #o o     #"
                ,"#  #  # #   ooo  #"
                ,"# o    o  o## ####"
                ,"# o o #o#  #  #"
                ,"##  ###  ###o #"
                ," #  #....     #"
                ," ####......####"
                ,"   #....####"
                ,"   #...##"
                ,"   #...#"
                ,"   #####"
                ],
                ["      ####"
                ,"  #####  #"
                ," ##     o#"
                ,"## o  ## ###"
                ,"#@o o # o  #"
                ,"#### ##   o#"
                ," #....#o o #"
                ," #....#   o#"
                ," #....  oo ##"
                ," #... # o   #"
                ," ######o o  #"
                ,"      #   ###"
                ,"      #o ###"
                ,"      #  #"
                ,"      ####"
                ],
                [" ###########"
                ," #     ##  #"
                ," #   o   o #"
                ,"#### ## oo #"
                ,"#   o #    #"
                ,"# ooo # ####"
                ,"#   # # o ##"
                ,"#  #  #  o #"
                ,"# o# o#    #"
                ,"#   ..# ####"
                ,"####.. o #@#"
                ,"#.....# o# #"
                ,"##....#  o #"
                ," ##..##    #"
                ,"  ##########"
                ],
                [" #########"
                ," #....   ##"
                ," #.#.#  o ##"
                ,"##....# # @##"
                ,"# ....#  #  ##"
                ,"#     #o ##o #"
                ,"## ###  o    #"
                ," #o  o o o#  #"
                ," # #  o o ## #"
                ," #  ###  ##  #"
                ," #    ## ## ##"
                ," #  o #  o  #"
                ," ###o o   ###"
                ,"   #  #####"
                ,"   ####"
                ],
                ["############ ######"
                ,"#   #    # ###....#"
                ,"#   oo#   @  .....#"
                ,"#   # ###   # ....#"
                ,"## ## ###  #  ....#"
                ," # o o     # # ####"
                ," #  o o##  #      #"
                ,"#### #  #### # ## #"
                ,"#  # #o   ## #    #"
                ,"# o  o  # ## #   ##"
                ,"# # o o    # #   #"
                ,"#  o ## ## # #####"
                ,"# oo     oo  #"
                ,"## ## ### o  #"
                ," #    # #    #"
                ," ###### ######"
                ],
                ["            #####"
                ,"#####  ######   #"
                ,"#   ####  o o o #"
                ,"# o   ## ## ##  ##"
                ,"#   o o     o  o #"
                ,"### o  ## ##     ##"
                ,"  # ##### #####oo #"
                ," ##o##### @##     #"
                ," # o  ###o### o  ##"
                ," # o  #   ###  ###"
                ," # oo o #   oo #"
                ," #     #   ##  #"
                ," #######.. .###"
                ,"    #.........#"
                ,"    #.........#"
                ,"    ###########"
                ],
                ["###########"
                ,"#......   #########"
                ,"#......   #  ##   #"
                ,"#..### o    o     #"
                ,"#... o o #   ##   #"
                ,"#...#o#####    #  #"
                ,"###    #   #o  #o #"
                ,"  #  oo o o  o##  #"
                ,"  #  o   #o#o ##o #"
                ,"  ### ## #    ##  #"
                ,"   #  o o ## ######"
                ,"   #    o  o  #"
                ,"   ##   # #   #"
                ,"    #####@#####"
                ,"        ###"
                ],
                ["      ####"
                ,"####### @#"
                ,"#     o  #"
                ,"#   o## o#"
                ,"##o#...# #"
                ," # o...  #"
                ," # #. .# ##"
                ," #   # #o #"
                ," #o  o    #"
                ," #  #######"
                ," ####"
                ],
                ["             ######"
                ," #############....#"
                ,"##   ##     ##....#"
                ,"#  oo##  o @##....#"
                ,"#      oo o#  ....#"
                ,"#  o ## oo # # ...#"
                ,"#  o ## o  #  ....#"
                ,"## ##### ### ##.###"
                ,"##   o  o ##   .  #"
                ,"# o###  # ##### ###"
                ,"#   o   #       #"
                ,"#  o #o o o###  #"
                ,"# ooo# o   # ####"
                ,"#    #  oo #"
                ,"######   ###"
                ,"     #####"
                ],
                ["    ############"
                ,"    #          ##"
                ,"    #  # #oo o  #"
                ,"    #o #o#  ## @#"
                ,"   ## ## # o # ##"
                ,"   #   o #o  # #"
                ,"   #   # o   # #"
                ,"   ## o o   ## #"
                ,"   #  #  ##  o #"
                ,"   #    ## oo# #"
                ,"######oo   #   #"
                ,"#....#  ########"
                ,"#.#... ##"
                ,"#....   #"
                ,"#....   #"
                ,"#########"
                ],
                ["           #####"
                ,"          ##   ##"
                ,"         ##     #"
                ,"        ##  oo  #"
                ,"       ## oo  o #"
                ,"       # o    o #"
                ,"####   #   oo #####"
                ,"#  ######## ##    #"
                ,"#.            ooo@#"
                ,"#.# ####### ##   ##"
                ,"#.# #######. #o o##"
                ,"#........... #    #"
                ,"##############  o #"
                ,"             ##  ##"
                ,"              ####"
                ],
                ["     ########"
                ,"  ####      ######"
                ,"  #    ## o o   @#"
                ,"  # ## ##o#o o o##"
                ,"### ......#  oo ##"
                ,"#   ......#  #   #"
                ,"# # ......#o  o  #"
                ,"# #o...... oo# o #"
                ,"#   ### ###o  o ##"
                ,"###  o  o  o  o #"
                ,"  #  o  o  o  o #"
                ,"  ######   ######"
                ,"       #####"
                ],
                ["        #######"
                ,"    #####  #  ####"
                ,"    #   #   o    #"
                ," #### #oo ## ##  #"
                ,"##      # #  ## ###"
                ,"#  ### o#o  o  o  #"
                ,"#...    # ##  #   #"
                ,"#...#    @ # ### ##"
                ,"#...#  ###  o  o  #"
                ,"######## ##   #   #"
                ,"          #########"
                ],
                [" #####"
                ," #   #"
                ," # # #######"
                ," #      o@######"
                ," # o ##o ###   #"
                ," # #### o    o #"
                ," # ##### #  #o ####"
                ,"##  #### ##o      #"
                ,"#  o#  o  # ## ## #"
                ,"#         # #...# #"
                ,"######  ###  ...  #"
                ,"     #### # #...# #"
                ,"          # ### # #"
                ,"          #       #"
                ,"          #########"
                ],
                ["##### ####"
                ,"#...# #  ####"
                ,"#...###  o  #"
                ,"#....## o  o###"
                ,"##....##   o  #"
                ,"###... ## o o #"
                ,"# ##    #  o  #"
                ,"#  ## # ### ####"
                ,"# o # #o  o    #"
                ,"#  o @ o    o  #"
                ,"#   # o oo o ###"
                ,"#  ######  ###"
                ,"# ##    ####"
                ,"###"
                ],
                ["##########"
                ,"#        ####"
                ,"# ###### #  ##"
                ,"# # o o o  o #"
                ,"#       #o   #"
                ,"###o  oo#  ###"
                ,"  #  ## # o##"
                ,"  ##o#   o @#"
                ,"   #  o o ###"
                ,"   # #   o  #"
                ,"   # ##   # #"
                ,"  ##  ##### #"
                ,"  #         #"
                ,"  #.......###"
                ,"  #.......#"
                ,"  #########"
                ],
                ["         ####"
                ," #########  ##"
                ,"##  o      o #####"
                ,"#   ## ##   ##...#"
                ,"# #oo o oo#o##...#"
                ,"# #   @   #   ...#"
                ,"#  o# ###oo   ...#"
                ,"# o  oo  o ##....#"
                ,"###o       #######"
                ,"  #  #######"
                ,"  ####"
                ],
                ["  #########"
                ,"  #*.*#*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  #.*.*.*.#"
                ,"  #*.*.*.*#"
                ,"  ###   ###"
                ,"    #   #"
                ,"###### ######"
                ,"#           #"
                ,"# o o o o o #"
                ,"## o o o o ##"
                ," #o o o o o#"
                ," #   o@o   #"
                ," #  #####  #"
                ," ####   ####"
                ],
                ["       ####"
                ,"       #  ##"
                ,"       #   ##"
                ,"       # oo ##"
                ,"     ###o  o ##"
                ,"  ####    o   #"
                ,"###  # #####  #"
                ,"#    # #....o #"
                ,"# #   o ....# #"
                ,"#  o # #.*..# #"
                ,"###  #### ### #"
                ,"  #### @o  ##o##"
                ,"     ### o     #"
                ,"       #  ##   #"
                ,"       #########"
                ],
                ["      ############"
                ,"     ##..    #   #"
                ,"    ##..* o    o #"
                ,"   ##..*.# # # o##"
                ,"   #..*.# # # o  #"
                ,"####...#  #    # #"
                ,"#  ## #          #"
                ,"# @o o ###  #   ##"
                ,"# o   o   # #   #"
                ,"###oo   # # # # #"
                ,"  #   o   # # #####"
                ,"  # o# #####      #"
                ,"  #o   #   #    # #"
                ,"  #  ###   ##     #"
                ,"  #  #      #    ##"
                ,"  ####      ######"
                ]
               ];

/* Constants */
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400;
var TILE_SIZE = 20;

/* Mutable things: */
var gCanvasContext;   /* Canvas 2d context */
var gMap;             /* Game map, gMap[y][x] == wall/player, etc */
var gPlayerPos;       /* Position of player in gMap, [y,x] */
var gLevelNumber = 0; /* Current level 0-gRawMaps.length-1 */
var gImage;           /* .png image to blit from */

/** redrawTile
 * This functions draw a tile to the canvas. It can be called as:
 * redrawTile(14, 3), which will draw gMap[14][3] to canvas
 * redrawTile(14, 3, 4), which will draw a player symbol to gMap[14][3] */
function redrawTile(y, x, token) {
  gCanvasContext.drawImage(gImage,
    arguments.length == 2 ? gMap[y][x] * TILE_SIZE : token * TILE_SIZE, 0, 
    TILE_SIZE, TILE_SIZE, x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

/** newGame 
 * Creates a new level (and destroys previous if existing
 * level should be between  0 - gRawMaps.length-1 or "random" */
function newGame(level) {

  /* Set thisMap to the map in gRawMaps that we want to load */
  if (level == "random") 
    level = Math.floor(Math.random() * gRawMaps.length);
  thisMap = gRawMaps[level];

  /* Fill the canvas with grey paint and clear gMap */
  gCanvasContext.fillStyle = "grey";
  gCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gMap = [];

  /* Create new gMap and draw it to screen */
  var token, tmparr = [];
  for (var y = 0; y < thisMap.length; y++) {
    for (var x = 0; x < thisMap[y].length; x++) {
      switch (thisMap[y][x]) {
        case ' ': token = 0; break; /* FLOOR */
        case '#': token = 1; break; /* WALL */
        case 'o': token = 2; break; /* BOX */
        case '*': token = 3; break; /* BOX IN SOCKET */
        case '@': token = 4; gPlayerPos = [y, x]; break; /* PLAYER */
        case '+': token = 5; break; /* PLAYER IN SOCKET */
        case '.': token = 6; break; /* SOCKET */
        case 'x': token = 9; break; /* INVISIBLE FLOOR */ 
      }
      tmparr.push(token);
      if (token != 9)
        redrawTile(y, x, token);
    }
    gMap.push(tmparr);
    tmparr = [];
  }

  /* Write the level number */
  gCanvasContext.fillStyle = "black";
  gCanvasContext.fillText(
      "Level: " + (gLevelNumber + 1) + " (press space to reset level)", 
      0, CANVAS_HEIGHT-TILE_SIZE -5);
}

/* Move player or crate */
function moveObject(dy, dx, objectType) {

  /* Set objY/objX to player's */
  var objY = gPlayerPos[0];
  var objX = gPlayerPos[1];

  /* If object is in fact a crate instead of player, 
   * add dy/dx to get its position*/
  if (objectType == "crate") {
    objY += dy;
    objX += dx;
  }

  /* If the target tile is blocked - return */
  switch (gMap[objY + dy][objX + dx]) {
    case 1: case 2: case 3: case 4: case 5: return; break;
  }

  /* Remove object from old tile */
  switch(gMap[objY][objX]) {
    case 2: case 4: gMap[objY][objX] = 0; break;
    case 3: case 5: gMap[objY][objX] = 6; break;
  }

  /* Redraw if player 
   * if it's a crate, the player will soon move there anyways */
  if (objectType == "player")
    redrawTile(objY, objX);

  /* Move the object */
  objY += dy;
  objX += dx;

  /* Add object to new tile */
  switch (gMap[objY][objX]) {
    case 0: gMap[objY][objX] = objectType == "crate" ? 2 : 4; break;
    case 6: gMap[objY][objX] = objectType == "crate" ? 3 : 5; break;
  }

  /* Redraw tile */
  redrawTile(objY, objX);

  /* If object is player, update gPlayerPos */
  if (objectType == "player")
    gPlayerPos = [objY, objX];

  /* If object is crate, check if we've won */
  else if (objectType == "crate")
    if (gMap[objY][objX] == 3) {
      for (var y = 0; y < gMap.length; y++)
        for (var x = 0; x < gMap[y].length; x++)
          if (gMap[y][x] == 2) return;
      newGame(++gLevelNumber);
    }
}

/* Handle events */
function handleEvent(event) {

  /* Read wasd / hjkl or returns */
  switch (event.keyCode) {
    case 97:  case 104: /* a/h -> moveLeft */ 
      var dx = -1, dy = 0; break;
    case 115: case 106: /* s/j -> moveDown */ 
      var dx = 0, dy = 1; break;
    case 119: case 107: /* w/k -> moveUp */ 
      var dx = 0, dy = -1; break;
    case 100: case 108: /* d/l -> moveRight */ 
      var dx = 1; dy = 0; break;
    case 32: /* space -> resetLevel */
      newGame(gLevelNumber); return; break;
    default: return; break;
  }

  switch (gMap[gPlayerPos[0] + dy][gPlayerPos[1] + dx]) {
    /* Open ground */ 
    case 0: moveObject(dy, dx, "player"); break;
    /* Stone */
    /* Stone in place */ 
    case 2: case 3: 
      moveObject(dy, dx, "crate"); 
      moveObject(dy, dx, "player"); 
      break;
    /* Socket */ 
    case 6: moveObject(dy, dx, "player"); break;
  }
}

function initMain(canvasName) {

  /* Load Image first */
  gImage = new Image();
  gImage.src = "tiles.png";
  gImage.onload = function () {

    var canvas = document.getElementById(canvasName);
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    canvas.addEventListener("keypress", handleEvent, false);
    canvas.focus();
    gCanvasContext = canvas.getContext("2d");
    gCanvasContext.font = "bold " + TILE_SIZE + "px sans-serif";
    gCanvasContext.textBaseline = "top";

  newGame(gLevelNumber);
  }
}


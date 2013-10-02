/* Created by Olle Kvarnstrom 
 * Date: 2013-10-01 */

/* Maps: */
var gRawMaps = [["    #####"
                ,"    #   #"
                ,"    #o  #"
                ,"  ###  o##"
                ,"  #  o o #"
                ,"### # ## #   ######"
                ,"#   # ## #####  ..#"
                ,"# o  o          ..#"
                ,"##### ### #@##  ..#"
                ,"    #     #########"
                ,"    #######"
                ],
                ["############"
                ,"#..  #     ###"
                ,"#..  # o  o  #"
                ,"#..  #o####  #"
                ,"#..    @ ##  #"
                ,"#..  # #  o ##"
                ,"###### ##o o #"
                ,"  # o  o o o #"
                ,"  #    #     #"
                ,"  ############"
                ],
                ["        ########"
                ,"        #     @#"
                ,"        # o#o ##"
                ,"        # o  o#"
                ,"        ##o o #"
                ,"######### o # ###"
                ,"#....  ## o  o  #"
                ,"##...    o  o   #"
                ,"#....  ##########"
                ,"########"
                ],
                ["           ########"
                ,"           #  ....#"
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
                ["        #####"
                ,"        #   #####"
                ,"        # #o##  #"
                ,"        #     o #"
                ,"######### ###   #"
                ,"#....  ## o  o###"
                ,"#....    o oo ##"
                ,"#....  ##o  o @#"
                ,"#########  o  ##"
                ,"        # o o  #"
                ,"        ### ## #"
                ,"          #    #"
                ,"          ######"
                ],
                ["######  ###"
                ,"#..  # ##@##"
                ,"#..  ###   #"
                ,"#..     oo #"
                ,"#..  # # o #"
                ,"#..### # o #"
                ,"#### o #o  #"
                ,"   #  o# o #"
                ,"   # o  o  #"
                ,"   #  ##   #"
                ,"   #########"
                ],
                ["       #####"
                ," #######   ##"
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
                ["  ####"
                ,"  #  ###########"
                ,"  #    o   o o #"
                ,"  # o# o #  o  #"
                ,"  #  o o  #    #"
                ,"### o# #  #### #"
                ,"#@#o o o  ##   #"
                ,"#    o #o#   # #"
                ,"#   o    o o o #"
                ,"#####  #########"
                ,"  #      #"
                ,"  #      #"
                ,"  #......#"
                ,"  #......#"
                ,"  #......#"
                ,"  ########"
                ],
                ["          #######"
                ,"          #  ...#"
                ,"      #####  ...#"
                ,"      #      . .#"
                ,"      #  ##  ...#"
                ,"      ## ##  ...#"
                ,"     ### ########"
                ,"     # ooo ##"
                ," #####  o o #####"
                ,"##   #o o   #   #"
                ,"#@ o  o    o  o #"
                ,"###### oo o #####"
                ,"     #      #"
                ,"     ########"
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
var gCanvasContext;
var gMap;
var gPlayerPos;
var gLevelNumber;

/* newGame destroys the old level and creates a new one */
function newGame(level) {

  /* If level is null, pick a random level */
  if (level == "random") level = Math.floor(Math.random() * gRawMaps.length);

  /* thisMap will be the level to load */
  thisMap = gRawMaps[level];

  /* Clear gMap and canvas: */
  gCanvasContext.fillStyle = "white";
  gCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  gMap = [];

  /* Create new gMap and draw it to screen */
  gCanvasContext.fillStyle = "black";
  for (var i = 0; i < thisMap.length; i++) {
    for (var j = 0, tmparr = []; j < thisMap[i].length; j++) {
      switch (thisMap[i][j]) {
        case ' ': tmparr.push(0); break;
        case '#': tmparr.push(1); break;
        case 'o': tmparr.push(2); break;
        case '*': tmparr.push(3); break;
        case '@': tmparr.push(4); gPlayerPos = [j, i]; break;
        case '+': tmparr.push(5); break;
        case '.': tmparr.push(6); break;
      }
      gCanvasContext.fillText(thisMap[i][j], j*TILE_SIZE, i*TILE_SIZE);
    }
    gMap.push(tmparr);
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
    default: return; break;
  }

  /* Remove player from old position and add to new */
  function move_player(dx, dy) {

    /* First check if it's possible to move crate */
    if (gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] != 0 &&
        gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx] != 6)
      return;

    /* Undraw player */
    var playerX = gPlayerPos[0] * TILE_SIZE;
    var playerY = gPlayerPos[1] * TILE_SIZE;

    gCanvasContext.fillStyle = "white";
    gCanvasContext.fillRect(playerX, playerY, TILE_SIZE, TILE_SIZE + 5);

    switch (gMap[gPlayerPos[1]][gPlayerPos[0]]) {
      case 4: 
        gMap[gPlayerPos[1]][gPlayerPos[0]] = 0; 
        break;
      case 5:
        gMap[gPlayerPos[1]][gPlayerPos[0]] = 6;
        gCanvasContext.fillStyle = "black";
        gCanvasContext.fillText('.', playerX, playerY);
        break;
    }

    /* Move player */
    gPlayerPos[0] += dx;
    gPlayerPos[1] += dy;

    /* Draw player */
    var playerX = gPlayerPos[0] * TILE_SIZE;
    var playerY = gPlayerPos[1] * TILE_SIZE;

    gCanvasContext.fillStyle = "white";
    gCanvasContext.fillRect(playerX, playerY, TILE_SIZE, TILE_SIZE + 5);

    gCanvasContext.fillStyle = "black";
    switch (gMap[gPlayerPos[1]][gPlayerPos[0]]) {
      case 0:
        gMap[gPlayerPos[1]][gPlayerPos[0]] = 4;
        gCanvasContext.fillText('@', playerX, playerY);
        break;
      case 6:
        gMap[gPlayerPos[1]][gPlayerPos[0]] = 5;
        gCanvasContext.fillText('+', playerX, playerY);
        break;
    }
  }

  function move_crate(dx, dy) {

    /* First check if it's possible to move crate */
    if (gMap[gPlayerPos[1] + dy*2][gPlayerPos[0] + dx*2] != 0 &&
        gMap[gPlayerPos[1] + dy*2][gPlayerPos[0] + dx*2] != 6)
      return;
    
    /* Remove crate */
    var crateX = gPlayerPos[0] + dx;
    var crateY = gPlayerPos[1] + dy;
    var crateTileX = crateX * TILE_SIZE;
    var crateTileY = crateY * TILE_SIZE;

    gCanvasContext.fillStyle = "white";
    gCanvasContext.fillRect(crateTileX, crateTileY, TILE_SIZE, TILE_SIZE + 5);

    switch (gMap[crateY][crateX]) {
      case 2: gMap[crateY][crateX] = 0; break;
      case 3: gMap[crateY][crateX] = 6; break;
    }

    /* Move crate */
    crateX += dx;
    crateY += dy;
    crateTileX = crateX * TILE_SIZE;
    crateTileY = crateY * TILE_SIZE;

    gCanvasContext.fillRect(crateTileX, crateTileY, TILE_SIZE, TILE_SIZE + 5);

    gCanvasContext.fillStyle = "black";
    switch (gMap[crateY][crateX]) {
      case 0: 
        gMap[crateY][crateX] = 2; 
        gCanvasContext.fillText('o', crateTileX, crateTileY);
        break;
      case 6: 
        gMap[crateY][crateX] = 3; 
        gCanvasContext.fillText('*', crateTileX, crateTileY);

        /* Check if player has won */
        for (var i = 0; i < gMap.length; i++) 
          for (var j = 0; j < gMap[i].length; j++) 
            if (gMap[i][j] == 2) return;

        /* Go to new page: */
        if (gLevelNumber == "random") newGame(gLevelNumber);
        else window.location.href = "index.html?level=" + ++gLevelNumber;
        break;
    }
  }

  switch (gMap[gPlayerPos[1] + dy][gPlayerPos[0] + dx]) {
    /* Open ground */ 
    case 0: move_player(dx, dy); break;
    /* Stone */
    /* Stone in place */ 
    case 2: case 3: move_crate(dx, dy); move_player(dx, dy); break;
    /* Socket */ 
    case 6: move_player(dx, dy); break;
  }
}

function initMain(canvasName) {

  /* index.html -> index.html?level=0
   * index.html?level=random -> random */
  var level = window.location.search;
  if (level.length >= 8 && level.substring(0,7) == "?level=") 
    level = level.substring(7);
  else level = 0;

  var canvas = document.getElementById(canvasName);
  canvas.width = CANVAS_WIDTH
  canvas.height = CANVAS_HEIGHT
  canvas.addEventListener("keypress", handleEvent, false);
  gCanvasContext = canvas.getContext("2d");
  gCanvasContext.font = "bold " + TILE_SIZE + "px sans-serif";
  gCanvasContext.textBaseline = "top";

  gLevelNumber = parseInt(level, 10);
  newGame(gLevelNumber);
}


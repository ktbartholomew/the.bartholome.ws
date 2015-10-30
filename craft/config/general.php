<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  'devMode' => $_ENV['CRAFT_DEVMODE'],
  'environmentVariables' => array(
    'basePath' => $_ENV['CRAFT_BASEPATH'],
    'baseUrl' => $_ENV['CRAFT_BASEURL'],
  )
);

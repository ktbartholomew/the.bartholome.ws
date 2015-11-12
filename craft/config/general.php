<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  'devMode' => getenv('CRAFT_DEVMODE'),
  'overridePhpSessionLocation' => false,
  'environmentVariables' => array(
    'basePath' => getenv('CRAFT_BASEPATH'),
    'baseUrl' => getenv('CRAFT_BASEURL'),
  )
);

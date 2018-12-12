from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phonenumber = models.CharField(max_length=255)
    password = models.CharField(max_length=255, default='password')

    def __str__(self):
        return self.name

class Property(models.Model):
    streetAddress = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)
    users = models.ForeignKey(User, on_delete=models.CASCADE, related_name='properties')

    def __str__(self):
        return self.streetAddress

class Job(models.Model):
    PROFESSION_CHOICES = (
        ('ELECTRICIAN', 'Electrician'), ('PLUMBING', 'Plumbing'), ('CLEANING', 'Cleaning'), ('PEST', 'Pest & Termite'), ('PAINTING', 'Painting'),
        ('CARPENTRY', 'Carpentry'), ('MOLD AND BIOHAZARD', 'Mold and BioHazard'), ('ROOFING', 'Roofing'), ('HVAC', 'HVAC'), ('HANDYMAN', 'Handyman'),
    )
    SUBCATEGORY_CHOICES = (
        # Electrical Choices
        ('REPLACE ELECTRICAL BOX', 'Replace Electrical Box'), ('REPLACE SWITCHES', 'Replace Switches'), ('WIRING', 'Wiring'), ('REPLACE FIXTURES', 'Replace Fixtures'),
        # Plumbing Choices
        ('CLOGGED DRAIN', 'Clogged Drain'), ('NEW TAP', 'New Tap'), ('CRACKED PIPE', 'Cracked Pipe'), ('SLOW OR CLOGGED DRAIN', 'Slow or Clogged Drain'), ('PIPE BLOCKED', 'Pipe Blocked'), ('CLOGGED TOILET', 'Clogged Toilet'), ('PIPE BROKEN', 'Pipe Broken'), ('AIR LOCKED', 'Air Locked'), ('LEAKY HOSE BIB', 'Leaky Hose Bib'), ('WATER HEATER', 'Water Heater'), ('SUMP PUMP FAILURE', 'Sump Pump Failure'), ('LOW WATER PRESSURE', 'Low Water Pressure'), ('DRIPPING FAUCET', 'Dripping Faucet'),
        # Cleaning Choices
        ('ROUTINE HOME CLEANING', 'Routine Home Cleaning'), ('HOME CLEAN PRE/POST MOVE', 'Home Clean Pre/Post Move'), ('HOME DEEP CLEAN', 'Home Deep Clean'),
        # Pest and Termite Choices
        ('ANTS', 'Ants'), ('TERMITE LETTER', 'Termite Letter'), ('TERMITE CONTROL', 'Termite Control'), ('MOSQUITO CONTROL', 'Mosquito Control'), ('VERMIN/LARGE PESTS', 'Vermin/Large Pests'),
        # Painting Choices
        ('TOUCH UP', 'Touch Up'), ('TRIM', 'Trim'), ('LIGHT SHEETROCK/MUD', 'Light Sheetrock/Mud'),
        # Carpentry/Sheetrock Choices
        ('SHEETROCK', 'Sheetrock'), ('WINDOWS', 'Windows'), ('DOORS', 'Doors'), ('CABINETS AND SHELVING', 'Cabinets and Shelving'),
        # Mold, Water or BioHazards Choices
        ('WATER DAMAGE REMEDIATION', 'Water Damage Remediation'), ('MOLD REMEDIATION', 'Mold Remediation'), ('BIOHAZARD/ANIMAL WASTE REMOVAL', 'BioHazard/Animal Waste Removal'), ('RADON TESTING', 'Radon Testing'),
        # Roofing Choices
        ('ROOF REPLACEMENT', 'Roof Replacement'), ('GUTTERS', 'Gutters'), ('ROOF REPAIRS', 'Roof Repairs'),
        # HVAC Choices
        ('BLOCKED VENTS', 'Blocked Vents'), ('FAULTY THERMOSTAT', 'Faulty Thermostat'), ('AC NOT COOLING', 'AC Not Cooling'), ('PRESSURE IMBALANCE', 'Pressure Imbalance'), ('COMPRESSOR FAILURE', 'Compressor Failure'), ('INSULATION', 'Insulation'),
        # Floor and Tile Choices
        ('HARDWOOD INSTALL AND REPAIR', 'Hardwood Install and Repair'), ('CARPET INSTALL AND REPAIR', 'Carpet Install and Repair'), ('TILE INSTALL AND REPAIR', 'Tile Install and Repair'),
        # Other can apply to all Profession Choices
        ('OTHER', 'Other'),
    )

    profession = models.CharField(max_length=255, choices=PROFESSION_CHOICES, default='Handyman')
    subcategory = models.CharField(max_length=255, choices=SUBCATEGORY_CHOICES, default='Other')
    properties = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='jobs')

    def __str__(self):
        return self.profession
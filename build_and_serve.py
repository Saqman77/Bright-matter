import os
import subprocess
import sys

def run_command(command, cwd=None):
    """Run a shell command and exit if it fails."""
    result = subprocess.run(command, cwd=cwd, shell=True, check=True)
    if result.returncode != 0:
        sys.exit(result.returncode)

def main():
    # Determine the operating system
    is_windows = sys.platform == 'win32'

    # Define paths
    base_dir = os.path.dirname(__file__)
    frontend_dir = os.path.join(base_dir, 'frontend')
    backend_dir = os.path.join(base_dir, 'backend')

    # Build the frontend using Vite
    print("Building frontend with Vite...")
    run_command('npm install', cwd=frontend_dir)
    run_command('npm run build', cwd=frontend_dir)

    # Run Django server
    print("Starting Django server...")
    activate_script = 'source env\\Scripts\\activate' if is_windows else 'source env/bin/activate'
    activate_command = f'{activate_script}'
    run_command(activate_command, cwd=base_dir)
    run_command('python manage.py runserver', cwd=backend_dir)

if __name__ == "__main__":
    main()

#!/usr/bin/env python3
from __future__ import annotations

import argparse
import contextlib
import http.server
import socket
import socketserver
import threading
import time
import webbrowser
from pathlib import Path


ROOT = Path(__file__).resolve().parent


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:  # noqa: A003
        return


class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True


def port_available(port: int) -> bool:
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            sock.bind(("127.0.0.1", port))
        except OSError:
            return False
    return True


def pick_port(start_port: int, attempts: int = 20) -> int:
    for p in range(start_port, start_port + attempts):
        if port_available(p):
            return p
    raise RuntimeError("No free port found.")


def run_server(port: int, open_browser: bool) -> None:
    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(ROOT), **kwargs)  # noqa: E731
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)
    url = f"http://127.0.0.1:{port}/index.html"

    print("Project Management Desktop")
    print(f"Root: {ROOT}")
    print(f"URL : {url}")
    print("Press Ctrl+C to stop.")

    if open_browser:
        threading.Timer(0.3, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


def main() -> None:
    parser = argparse.ArgumentParser(description="Run local desktop server for project-management.")
    parser.add_argument("--port", type=int, default=8080, help="Preferred local port (default: 8080)")
    parser.add_argument("--no-browser", action="store_true", help="Do not auto-open browser")
    args = parser.parse_args()

    port = pick_port(args.port)
    run_server(port, open_browser=not args.no_browser)


if __name__ == "__main__":
    main()
